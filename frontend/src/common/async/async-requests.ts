import axios from 'axios';

export interface ISession {
    origin: string;
    destination: string;
    sDate: string;
    eDate: string;
};

export interface IFlight {
    origin: string;
    destination: string;
    sDate: string;    
};

/**
 * Create Session from Flight Search API
*/
export const createSession = (session: ISession): Promise<any> => {
    return axios.post(`/session`, {
        origin: session.origin,
        destination: session.destination,
        sDate: session.sDate,
        eDate: session.eDate
    });
};

/**
 * Browser Flights from Flight Search API
*/
export const browseFlights = (flight: IFlight): Promise<any> => {
    return axios.post(`/flights`, {
        origin: flight.origin,
        destination: flight.destination,
        sDate: flight.sDate,	
    });
};