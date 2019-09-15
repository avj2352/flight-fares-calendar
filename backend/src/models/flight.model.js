/**
 * All API request related to Rapid API - Unirest SDK
*/
import { api } from './../config/api-key';
import unirest from 'unirest';

export class FlightModel {
    
    createSession (request)  {
        const { origin, destination, sDate, eDate } = request;
        const promise = new Promise((resolve, reject)=>{
            const req = unirest("POST", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0");
            req.headers({
                "x-rapidapi-host": api.host,
                "x-rapidapi-key": api.key,
                "content-type": api.contentType
            });
            req.form({
                "inboundDate": eDate,
                "cabinClass": "business",
                "children": "0",
                "infants": "0",
                "country": "US",
                "currency": "USD",
                "locale": "en-US",
                "originPlace": origin,
                "destinationPlace": destination,
                "outboundDate": sDate,
                "adults": "1"
            });            
            req.end((res)=>{
                if (res.error) {                    
                    reject(res.body);
                }
                else {                    
                    const sessionID = res.headers.location.substring(api.locationLink.length);
                    resolve({session: sessionID, ...res.headers});
                }
            });
        });
        return promise;
    }

    browseFlights (request)  {
        const { origin, destination, sDate } = request;
        const promise = new Promise((resolve, reject)=>{

            const req = unirest(
                "GET", 
                `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${sDate}`);
                
            req.headers({
                "x-rapidapi-host": api.host,
                "x-rapidapi-key": api.key,
                "content-type": api.contentType
            });

            // PAJ - Not passing the inboundDate would mean its a One way trip
            // https://skyscanner.github.io/slate/#browse-quotes
            // req.query({
            //     "inboundpartialdate": "2019-12-01"
            // });

            req.end((res)=>{
                if (res.error) {                    
                    reject(res.body);
                }
                else {                    
                    const quotes = res.body['Quotes'];
                    const carriers = res.body['Carriers'];
                    const currencies = res.body['Currencies'];
                    resolve({
                        origin: origin,
                        destination: destination,
                        outBoundDate: sDate,                        
                        quotes: quotes,
                        carriers: carriers,
                        currencies: currencies
                    });
                }
            });
        });
        return promise;
    }    


}