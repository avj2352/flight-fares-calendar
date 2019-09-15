'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _session = require('./../controllers/session.controller');

var _flights = require('./../controllers/flights.controller');

/**
 * Main Webservice Routes application
*/
var sessionReq = new _session.SessionController();
var flights = new _flights.FlightsController();

var routes = function routes(app) {

    // SESSION=====
    app.route('/session').post(sessionReq.createSession);

    // BROWSE FLIGHTS=====
    app.route('/flights').post(flights.browseFlights);
};

exports.default = routes;
//# sourceMappingURL=app.routes.js.map