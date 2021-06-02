import Ticket from "../model/Ticket";

export default class FavoritesRepository {

    getFavoritesItems(){
        return this._storage;
    }

    addToFavorites( ticket ){
        this._storage.push(ticket);
    }

    deleteFromFavorites( ticket ){
        const index = this._storage.findIndex( item =>  ticket.isEqual(item) );
        if( -1 == index ){
            console.log( 'deleteFromFavorites. Cannot find and delete ticket: ', ticket);
            return;
        }
        this._storage.splice(index, 1);
    }
    
    _storage = [];
}