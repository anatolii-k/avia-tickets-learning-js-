import TicketViewModel from "./TicketViewModel"

export default class TicketPresenter{

    constructor( ticketView, ticket, citiesInteractor, airlinesInteractor, favoritesInteractor ){

        this._favoritesInteractor = favoritesInteractor;
        this._ticketView = ticketView;
        this._ticket = ticket;
        this._ticketView.setTicketModel( new TicketViewModel(ticket, citiesInteractor, airlinesInteractor ) );
        this._ticketView.setOnAddToFavoriteHandler( this._onAddToFavoriteHandler.bind(this) );
        
    }

    getTicketView(){
        return this._ticketView;
    }

    _onAddToFavoriteHandler(){
        this._favoritesInteractor.addToFavorites( this._ticket );
        this._ticketView.disableAddToFavorite();
    }

}