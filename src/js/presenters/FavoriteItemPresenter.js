import TicketViewModel from "./TicketViewModel";

export default class FavoriteItemPresenter {

    constructor( favoriteItemView, ticket, citiesInteractor, airlinesInteractor, favoritesInteractor ){
        this._favoriteItemView = favoriteItemView;
        this._ticket = ticket;
        this._citiesInteractor = citiesInteractor;
        this._airlinesInteractor = airlinesInteractor;
        this._favoritesInteractor = favoritesInteractor;

        this._favoriteItemView.setTicketModel( new TicketViewModel(ticket, citiesInteractor, airlinesInteractor ) );
        this._favoriteItemView.setOnDeleteHandler( this._onDeleteHandler.bind(this) );

        this._onDeleteFavoriteItemPublisher = [];
    }

    getFavoriteItemView(){
        return this._favoriteItemView;
    }

    addOnDeleteFavoriteItemSubscriber(subscriber){
        this._onDeleteFavoriteItemPublisher.push(subscriber);
    }

    _onDeleteHandler(){

        this._favoritesInteractor.deleteFromFavorites(this._ticket);
        this._onDeleteFavoriteItemPublisher.forEach( subscriber => { subscriber() })
    }

}
