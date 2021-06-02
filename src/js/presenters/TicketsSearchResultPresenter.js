import TicketPresenter from "./TicketPresenter";
import TicketView from "../views/TicketView";
import TicketViewModel from "./TicketViewModel";


export default class TicketsSearchResultPresenter{

    constructor( ticketsSearchResultView, citiesInteractor, airlinesInteractor, favoritesInteractor ){

        this._ticketsSearchResultView = ticketsSearchResultView;
        this._citiesInteractor = citiesInteractor;
        this._airlinesInteractor = airlinesInteractor;
        this._favoritesInteractor = favoritesInteractor;
    }

    showTickets( ticketsList ){

        this._ticketsSearchResultView.clearSearchResult();

        if( ticketsList.length < 1 ){
            this._ticketsSearchResultView.showEmptySearchResult();
            return;
        }

        const ticketsViews = ticketsList.map( ticket => {
            const presenter =  new TicketPresenter( new TicketView(), ticket, 
                                                   this._citiesInteractor,
                                                   this._airlinesInteractor,
                                                   this._favoritesInteractor);
            return presenter.getTicketView();
        } );

        this._ticketsSearchResultView.showTickets( ticketsViews );
    }


    showErrorMsg( error ){

        this._ticketsSearchResultView.clearSearchResult();        
        console.log('presenter: ', error);
    }

}