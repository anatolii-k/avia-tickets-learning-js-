export default class AirlinesInteractor{
    
    constructor( airlinesRepository ){
        this._airlinesRepository = airlinesRepository;
    }

    getAirlineByCode(code){
        return this._airlinesRepository.getAirlineByCode(code);
    }
}