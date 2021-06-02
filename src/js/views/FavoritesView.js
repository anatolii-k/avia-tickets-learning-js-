export default class FavoritesView{

    constructor(){
        this._favoritesContainer = document.querySelector("#favorites-dropdown");
        this._favoritesTrigger = document.querySelector(".favorites .dropdown-trigger");
    }

    addOnClickFavoritesHandler( handler ) {
        // run handler before materilize css handlers are run on 
        this._favoritesTrigger.addEventListener('click', () => handler(), true );
    }

    updateFavoritesList( favoritesViews ){

        const fragement = document.createDocumentFragment();

        favoritesViews.forEach( ticketView => {
            fragement.appendChild( ticketView.createFavoriteItemElement() );
            fragement.appendChild( document.createElement("hr") );
        } );

        this._favoritesContainer.innerHTML = "";
        this._favoritesContainer.appendChild(fragement);        
    }
}