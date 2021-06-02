class TicketsService{

    static baseUrl = "https://aviasales-api.herokuapp.com";

    async getCountries(){
        return this._httpGet(`${TicketsService.baseUrl}/countries`)
    }

    async getCities(){
        return this._httpGet(`${TicketsService.baseUrl}/cities`)
    }

    async getTickets( searchCriteria) {

        searchCriteria.return_date = searchCriteria.return_date || searchCriteria.depart_date;
        return this._httpGet(`${TicketsService.baseUrl}/prices/cheap`, searchCriteria);
    }

    async getAirlines(){
        return this._httpGet( `${TicketsService.baseUrl}/airlines` );
    }

    async _httpGet( _url, params = undefined ){

        let url = _url;
        if( params ){
            url += "?" + new URLSearchParams(params).toString();
        }
        const response = await fetch( url );
        if( response.ok )
        {
            return response.json();
        }
        return Promise.reject( `Call to ${url} fails. Status: ${response.status}`);
 
    }
}

const ticketsService = new TicketsService();
export default ticketsService;