import FavoriteItemView from "../views/FavoriteItemView"
import FavoriteItemPresenter from "./FavoriteItemPresenter";

export default class FavoritesPresenter{

    constructor( favoritesView, favoritesInteractor, citiesInteractor, airlinesInteractor ){
        
        this._favoritesInteractor = favoritesInteractor;
        this._favoritesView = favoritesView;
        this._citiesInteractor = citiesInteractor;
        this._airlinesInteractor = airlinesInteractor;

        this._favoritesView.addOnClickFavoritesHandler( this.updateFavoritesList.bind(this) );

    }

    updateFavoritesList(){

        const favoritesViews = this._favoritesInteractor.getFavoritesItems().map( ticket =>{

            const presenter =  new FavoriteItemPresenter( new FavoriteItemView( this._favoritesView ),
                                                   ticket, 
                                                   this._citiesInteractor,
                                                   this._airlinesInteractor,
                                                   this._favoritesInteractor);
                                                   
            presenter.addOnDeleteFavoriteItemSubscriber(this.updateFavoritesList.bind(this));
            
            return presenter.getFavoriteItemView();

        });
        
        this._favoritesView.updateFavoritesList( favoritesViews );
    }
}