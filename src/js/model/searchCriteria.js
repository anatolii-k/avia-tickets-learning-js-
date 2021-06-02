export default class SearchCriteria{
    origin;
    destination;
    depart_date;
    return_date;
    currency;

    constructor( origin, destination, depart_date, return_date, currency ){
        this.origin = origin;
        this.destination = destination;
        this.depart_date = depart_date;
        this.return_date = return_date;
        this.currency = currency;
    }
}