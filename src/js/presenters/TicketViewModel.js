export default class TicketViewModel {

    originName;
    destinationName;
    price;
    currency;
    transfers;
    airlineCode;
    airlineName;
    flightNumber;
    departureDate;

    constructor(ticket, citiesInteractor, airlinesInteractor){

        const originCity = citiesInteractor.getCityByCode( ticket.originCode );
        const destinationCity = citiesInteractor.getCityByCode( ticket.destinationCode );
        const airline = airlinesInteractor.getAirlineByCode( ticket.airlineCode );

        this.originName = originCity ? originCity.name : ticket.originCode;
        this.destinationName = destinationCity ? destinationCity.name : ticket.destinationCode;
        this.price = ticket.price;
        this.currency = TicketViewModel._currencyDict[ticket.priceCurrency] || ticket.priceCurrency;
        this.transfers = ticket.transfers;
        this.airlineCode = ticket.airlineCode;
        this.airlineName = airline ? airline.name : ticket.airlineCode;
        this.flightNumber = ticket.flightNumber;
        this.departureDate = ticket.departureDate.toLocaleString( "ru", TicketViewModel._dateFormat );
    }

    static _currencyDict = {
        usd : "$",
        eur : "€"
    }

    static _dateFormat = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }

}