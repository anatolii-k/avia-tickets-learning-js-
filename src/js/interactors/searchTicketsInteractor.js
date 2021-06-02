export default class SearchTicketsInteractor{
    
    constructor( ticketsRepository ){
        this._ticketsRepository = ticketsRepository;
    }

    async searchTickets( searchCriteria ){
        return this._ticketsRepository.getTickets(searchCriteria);
    }

    _ticketsRepository;
}

