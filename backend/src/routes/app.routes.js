/**
 * Main Webservice Routes application
*/
import { SessionController } from './../controllers/session.controller';
import { FlightsController } from './../controllers/flights.controller';

const sessionReq = new SessionController();
const flights = new FlightsController();

const routes = (app) => {

    // SESSION=====
    app.route('/session')
    .post(sessionReq.createSession);

    // BROWSE FLIGHTS=====
    app.route('/flights')
    .post(flights.browseFlights);

};

export default routes;