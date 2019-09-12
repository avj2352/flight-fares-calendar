/**
 * Main Webservice Routes application
*/
import { SessionController } from './../controllers/session.controller';

const sessionReq = new SessionController();

const routes = (app) => {

    // SESSION=====
    app.route('/session')
    .post(sessionReq.createSession);

};

export default routes;