export default class Ticket {

    originCode;
    destinationCode;
    price;
    priceCurrency;
    transfers;
    airlineCode;
    flightNumber;
    departureDate;

    constructor( originCode, destinationCode, price, priceCurrency,
                 transfers, airlineCode, flightNumber, departureDate ){
        this.originCode = originCode;
        this.destinationCode = destinationCode;
        this.price = price;
        this.priceCurrency = priceCurrency;
        this.transfers = transfers;
        this.airlineCode = airlineCode;
        this.flightNumber = flightNumber;
        this.departureDate = departureDate;
    }

    isEqual( other ){
        return this.originCode === other.originCode &&
        this.destinationCode === other.destinationCode &&
        this.price === other.price &&
        this.priceCurrency === other.priceCurrency &&
        this.transfers === other.transfers &&
        this.airlineCode === other.airlineCode &&
        this.flightNumber === other.flightNumber &&
        this.departureDate.getTime() === other.departureDate.getTime() ;
    }
}