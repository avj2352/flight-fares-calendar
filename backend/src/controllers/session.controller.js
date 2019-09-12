/**
 * Session Controller
*/
import { FlightModel } from './../models/flight.model';

export class SessionController {
        
    createSession (req, res) {
        // console.log('Calling createSession');        
        const flight = new FlightModel();
        flight.createSession({
            origin: `${req.body.origin}-sky`,
            destination: `${req.body.destination}-sky`,
            sDate: req.body.sDate,
            eDate: req.body.eDate
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