export default class FavoriteItemView {

    constructor( favoritesView ){
        this._favoritesView = favoritesView;
        this._ticketModel = null;
        this._onDeleteHandler = null;
        this._favoriteElement = null;
    }

    setTicketModel( ticketModel ){
        this._ticketModel = ticketModel;
    }

    setOnDeleteHandler( handler ){
        this._onDeleteHandler = handler;
    }

    createFavoriteItemElement(){

      this._favoriteElement = document.createElement("div");
      this._favoriteElement.innerHTML = this._getFavoriteItemHtml();

      const deleteButton = this._favoriteElement.querySelector(".delete-favorite");
      deleteButton.addEventListener("click", event => {
            event.preventDefault();
            this._onDeleteHandler();
        });

      return this._favoriteElement;
    }

    _getFavoriteItemHtml(){
        return `
        <div class="favorite-item  d-flex align-items-start">
                <img
                  src="http://pics.avs.io/200/200/${this._ticketModel.airlineCode}.png"
                  class="favorite-item-airline-img"
                />
                <div class="favorite-item-info d-flex flex-column">
                  <div
                    class="favorite-item-destination d-flex align-items-center"
                  >
                    <div class="d-flex align-items-center mr-auto">
                      <span class="favorite-item-city">${this._ticketModel.originName}</span>
                      <i class="medium material-icons">flight_takeoff</i>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="medium material-icons">flight_land</i>
                      <span class="favorite-item-city">${this._ticketModel.destinationName}</span>
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
                    class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
                    >Delete</a
                  >
                </div>
              </div>
        `;
    }
}