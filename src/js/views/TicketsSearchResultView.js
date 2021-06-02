export default class TicketsSearchResultView{

    constructor(){
        this._searchResultContainer = document.querySelector(".tickets-sections .row");
    }

    showTickets( ticketsViews ){

        const fragement = document.createDocumentFragment();

        ticketsViews.forEach( ticketView => {
            fragement.appendChild( ticketView.createTicketElement() );
        } );

        this._searchResultContainer.appendChild(fragement);
    }


    showErrorMsg( error ){

    }

    showEmptySearchResult(){
        this._searchResultContainer.innerHTML = TicketsSearchResultView._emptyResultHtml;
    }

    clearSearchResult() {
        this._searchResultContainer.innerHTML = "";
    }

    _searchResultContainer;

    static _emptyResultHtml = `
    <div class="tickets-empty-res-msg">
      По вашему запросу билетов не найдено.
    </div>`;
}