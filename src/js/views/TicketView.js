export default class TicketView{

    constructor(){
        this._ticketModel = null;
        this._onAddToFavoriteHandler = null;
        this._ticketElement = null;
    }

    setTicketModel( ticketModel ){
        this._ticketModel = ticketModel;
    }

    setOnAddToFavoriteHandler( handler ){
        this._onAddToFavoriteHandler = handler;
    }

    createTicketElement(){

      this._ticketElement = document.createElement("div");
      this._ticketElement.innerHTML = this._getTicketHtml();

      const addToFavorites = this._ticketElement.querySelector(".add-favorite");
      addToFavorites.addEventListener("click", event => {
            event.preventDefault();
            this._onAddToFavoriteHandler();
        });

      return this._ticketElement;
    }

    disableAddToFavorite(){
      this._ticketElement.querySelector(".add-favorite").classList.add("disabled");
    }

    _getTicketHtml(){
        return `
        <div class="col s12 m6">
        <div class="card ticket-card">
          <div class="ticket-airline d-flex align-items-center">
            <img
              src="http://pics.avs.io/200/200/${this._ticketModel.airlineCode}.png"
              class="ticket-airline-img"
            />
            <span class="ticket-airline-name"
              >${this._ticketModel.airlineName}</span
            >
          </div>
          <div class="ticket-destination d-flex align-items-center">
            <div class="d-flex align-items-center mr-auto">
              <span class="ticket-city">${this._ticketModel.originName} </span>
              <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
              <i class="medium material-icons">flight_land</i>
              <span class="ticket-city">${this._ticketModel.destinationName}</span>
            </div>
          </div>
          <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${this._ticketModel.departureDate}</span>
            <span class="ticket-price ml-auto">${this._ticketModel.currency}${this._ticketModel.price}</span>
          </div>
          <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: ${this._ticketModel.transfers}</span>
            <span class="ticket-flight-number">Номер рейса: ${this._ticketModel.flightNumber}</span>
          </div>
          <a
            class="waves-effect waves-light btn-small green darken-1 add-favorite ml-auto"
            >Add to favorites</a
          >
        </div>
      </div>   
        `;
    }
}