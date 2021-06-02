import ticketsService from "./private/TicketsService";
import Airline from "../model/airline";

export default class AirlinesRepository{

    constructor(){
        this._FillAirlinesMap()
    }

    getAirlineByCode(code){
        return this._airlinesMap.get( code );
    }

     _FillAirlinesMap(){
        
        ticketsService.getAirlines()
        .then( airlines => {
            airlines.forEach( airline => {
                this._airlinesMap.set( airline.code, 
                                       new  Airline( airline.code, airline.name || airline.name_translations.en ) )
            });
        } )
        .catch( err => { console.log(`Fails to load airlines list: ${err}`) } );
    }

    _airlinesMap = new Map();
}