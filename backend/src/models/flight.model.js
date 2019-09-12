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
                "inboundDate": sDate,
                "cabinClass": "business",
                "children": "0",
                "infants": "0",
                "country": "US",
                "currency": "USD",
                "locale": "en-US",
                "originPlace": origin,
                "destinationPlace": destination,
                "outboundDate": eDate,
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

    pollResults(session) {

    }


}