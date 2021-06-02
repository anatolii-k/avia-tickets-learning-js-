import "../plugins/plugins"

export default class SearchTicketsView{

    constructor(){
        this._originInput = document.querySelector("#location-origin-input"); 
        this._destinationInput = document.querySelector("#location-destination-input");
        this._departureDateInput = document.querySelector("#depart-date-input");
        this._currentcyInput = document.querySelector("#currency-input");
    }

    setOnSearchTicketHandler( handler ){
        const formElement = document.querySelector("#search-tickets-form");
        formElement.addEventListener("submit",  event => {
            event.preventDefault();
            handler();
        } );
    }

    setCitiesList( citiesList ){
     
        let origin = M.Autocomplete.getInstance( this._originInput );
        let destination = M.Autocomplete.getInstance( this._destinationInput );

        origin.updateData(citiesList);
        destination.updateData(citiesList);
    }

    getOrigin() {
        return this._originInput.value;
    }

    getDestination() {
        return this._destinationInput.value;
    }

    getDepartureDate(){
        return this._departureDateInput.value;
    }

    getCurrency(){
        return this._currentcyInput.value;
    }


    _originInput; 
    _destinationInput;
    _departureDateInput;
    _currentcyInput;
}