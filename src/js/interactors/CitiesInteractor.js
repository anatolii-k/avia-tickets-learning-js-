export default class CitiesInteractor{

    constructor( citiesRepository ){
        this._citiesRepository = citiesRepository;
    }

    async getCities(){
        return this._citiesRepository.getCities();
    }

    getCityByCode( code ){
        return this._citiesRepository.getCityByCode(code);
    }

    _citiesRepository;
}