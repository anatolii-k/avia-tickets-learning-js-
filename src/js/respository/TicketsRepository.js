import Ticket from '../model/Ticket';
import ticketsService from './private/TicketsService';


export default class TicketsRepository{

    async getTickets( searchCriteria) {
        
        const response = await ticketsService.getTickets(searchCriteria);
        
        if( !response.success )
        {
            return Promise.reject( `Get tikests error: ${response.error}` );
        }

        return Object.values(response.data).map( ticket => new Ticket( ticket.origin,
                                                                       ticket.destination,
                                                                       ticket.price,
                                                                       response.currency,
                                                                       ticket.transfers,
                                                                       ticket.airline,
                                                                       ticket.flight_number,
                                                                       new Date(ticket.departure_at)) );

    }
}