export default class FavoritesInteractor {

    constructor( favoritesRepository ){
        this._favoritesRepository = favoritesRepository;
    }

    getFavoritesItems(){
        return this._favoritesRepository.getFavoritesItems();
    }

    addToFavorites( ticket ){
        this._favoritesRepository.addToFavorites(ticket);
    }

    deleteFromFavorites(ticket){
        this._favoritesRepository.deleteFromFavorites(ticket);
    }
}