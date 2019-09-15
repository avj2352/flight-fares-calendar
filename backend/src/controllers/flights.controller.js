/**
 * Flights Controller
*/
import { FlightModel } from './../models/flight.model';

export class FlightsController {
        
    browseFlights (req, res) {
        // console.log('Calling createSession');        
        const flight = new FlightModel();
        flight.browseFlights({
            origin: `${req.body.origin}-sky`,
            destination: `${req.body.destination}-sky`,
            sDate: req.body.sDate,            
        }).then(
            success => {
                res.status(201).json(success);
            },
            error => {
                res.status(400).send(error);
            }   
        );          
    }

}