import SearchCriteria from "../model/searchCriteria";

export default class SearchTicketsPresenter{

    constructor( searchTicketsView, ticketsSearchResultPresenter, searchTicketsInteractor, citiesInteractor ){
        this._searchTicketsView = searchTicketsView;
        this._ticketsSearchResultPresenter = ticketsSearchResultPresenter;
        this._searchTicketsInteractor = searchTicketsInteractor;
        this._citiesInteractor = citiesInteractor;

        this.setCitiesListToView();
        this._searchTicketsView.setOnSearchTicketHandler( this.onSearchTicketHandler.bind(this) )
    }

    onSearchTicketHandler(){
        const view = this._searchTicketsView;

        const originCode = this._formatedCitiesMap.get(view.getOrigin()).code;
        const destinationCode = this._formatedCitiesMap.get(view.getDestination()).code;;
        const searchCriteria = new SearchCriteria( originCode,
                                                   destinationCode,
                                                   view.getDepartureDate(),
                                                   "",
                                                   view.getCurrency());

        this._searchTicketsInteractor.searchTickets( searchCriteria )
        .then( tickets => this._ticketsSearchResultPresenter.showTickets(tickets) )
        .catch( err => this._ticketsSearchResultPresenter.showErrorMsg(err) );
    }

    setCitiesListToView(){

        this._formatedCitiesMap.clear();

        this._citiesInteractor.getCities()
        .then( cities => {
            
            const formatedCitiesList = cities.reduce( (citiesObj, city) => {

                const formatedCityLine = `${city.name}, ${city.country.name}`;
                this._formatedCitiesMap.set( formatedCityLine, city );
                citiesObj[formatedCityLine] = null;
                return citiesObj;
            }, {} );

            this._searchTicketsView.setCitiesList( formatedCitiesList );
        } )
        .catch( err => console.log(`Unable to set list of cities. Error: ${err}`) );
    }

    _searchTicketsView;
    _citiesInteractor;
    _searchTicketsInteractor;
    _formatedCitiesMap = new Map();
}