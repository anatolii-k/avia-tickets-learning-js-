import "../css/style.css";

import SearchTicketsPresenter from "./presenters/SearchTicketsPresenter";
import TicketsSearchResultPresenter from "./presenters/TicketsSearchResultPresenter";

import SearchTicketsView from "./views/SearchTicketsView";
import TicketsSearchResultView from "./views/TicketsSearchResultView";

import TicketsRepository from "./respository/TicketsRepository";
import CitiesRepository from "./respository/CitiesRepository";
import AirlinesRepository from "./respository/AirlinesRepository";
import FavoritesRepository from "./respository/FavoritesRespository";

import SearchTicketsInteractor from "./interactors/searchTicketsInteractor";
import CitiesInteractor from "./interactors/CitiesInteractor";
import AirlinesInteractor from "./interactors/AirlinesInteractor";
import FavoritesInteractor from "./interactors/FavoritesInteractor";
import FavoritesPresenter from "./presenters/FavoritesPresenter";
import FavoritesView from "./views/FavoritesView";


document.addEventListener("DOMContentLoaded", () => {

    const citiesInteractor = new CitiesInteractor( new CitiesRepository() );
    const airlinesInteractor = new AirlinesInteractor( new AirlinesRepository() );
    const searchTicketsInteractor = new SearchTicketsInteractor( new TicketsRepository());
    const favoritesInteractor = new FavoritesInteractor( new FavoritesRepository() );

    const ticketsSearchResultPresenter = new TicketsSearchResultPresenter( new TicketsSearchResultView(),
                                                                           citiesInteractor,
                                                                           airlinesInteractor,
                                                                           favoritesInteractor );

    const searchTicketsPresenter = new SearchTicketsPresenter( new SearchTicketsView(),
                                                               ticketsSearchResultPresenter,
                                                               searchTicketsInteractor,
                                                               citiesInteractor );
    
    const favoritesPresenter = new FavoritesPresenter( new FavoritesView(), 
                                                       favoritesInteractor,
                                                       citiesInteractor,
                                                       airlinesInteractor ); 

    //
});

