import ticketsService from './private/TicketsService';
import Country from "../model/coutry";
import City from "../model/city";

export default class CitiesRepository{

    constructor(){
        this._loadedPromise = this._loadCities();
    }

    async getCities() {
        await this._loadedPromise.then();
        return Array.from( this._citiesMap.values() );
    }

    getCityByCode( code ){
        return this._citiesMap.get( code );
    }

    async _loadCities(){

        const [cities, countries] = await Promise.all( [ticketsService.getCities(), 
                                                        ticketsService.getCountries()] );

        const countriesMap = countries.reduce( (map, currentItem) =>{
            map.set( currentItem.code, currentItem.name || currentItem.name_translations.en );
            return map;
        }
         , new Map() );

        cities.forEach( city => { 
            this._citiesMap.set( city.code , new City( city.code, 
                                                        city.name || city.name_translations.en,
                                                        new Country( city.country_code, countriesMap.get(city.country_code) ) ) )
                                } );
        return 1;
    }

    _citiesMap = new Map();
    _loadedPromise;
}