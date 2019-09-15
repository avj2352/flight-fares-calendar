/**
 * Flights Controller
*/
import { FlightModel } from './../models/flight.model';

export class FlightsController {
        
    browseFlights (req, res) {
        // console.log('Calling createSession');        
        const flight = new FlightModel();
        flight.browseFlights({
            origin: `${req.body.origin}`,
            destination: `${req.body.destination}`,
            sDate: req.body.sDate,            
        }).then(
            success => {
                res.status(200).json(success);
            },
            error => {
                res.status(400).send(error);
            }   
        );          
    }

}