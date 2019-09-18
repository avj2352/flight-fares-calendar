/**
 * PAJ - Creating options for Select Month and Data to send to backend API
 */
import { IOptions } from './../select/Select';
import { browseFlights } from './../../common/async/async-requests';
export interface IMonthDates {
    month: string;
    dates: string[];
};

export interface IBrowseFlightsParams {
    origin: string;
    destination: string;
    month: string;
};

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export interface IBrowseFlightsPromise {
    sDate: string;
    promiseList: Promise<any>[];
}

export const monthOptions: IOptions[] = [
    { key: 'SEP', display: 'September 2019'},
    { key: 'OCT', display: 'October 2019'},
    { key: 'NOV', display: 'November 2019'},
    { key: 'DEC', display: 'December 2019'},
    { key: 'JAN', display: 'January 2020'}        
];

export const cabinDetails: IOptions[] = [
    {key: '01', display: '1 Adult, Economy'}
];

export const getSinglePromise = (input: IBrowseFlightsParams) => {
    const temp = month_data.filter(el => {
        return el.month === input.month;
    })[0];
    const sDate = temp.dates[0];
    const promise = browseFlights({origin: input.origin, destination: input.destination, sDate: sDate});
    return promise;
};

export const getMonthlyPromiseList = (input: IBrowseFlightsParams): IBrowseFlightsPromise => {
    const queryList = month_data.filter(el => {
        return el.month === input.month;
    })[0];    
    let promiseList: Promise<any>[] = [];
    queryList.dates.map(val => {
       const promise = browseFlights({origin: input.origin, destination: input.destination, sDate: val});
       promiseList.push(promise);
    });
    let result: IBrowseFlightsPromise = {
        sDate: queryList.dates[0],
        promiseList: promiseList
    };
    return result;
};

export const month_data: IMonthDates[] = [
    {
        month: 'SEP', 
        dates: [
            '2019-09-18', 
            '2019-09-19',
            '2019-09-20',
            '2019-09-21',
            '2019-09-22',
            '2019-09-23',
            '2019-09-24',
            '2019-09-25',
            '2019-09-26',
            '2019-09-27',
            '2019-09-28',
            '2019-09-29',
            '2019-09-30',
        ],
    },
    {
        month: 'OCT',
        dates: [
            '2019-10-01',
            '2019-10-02', 
            '2019-10-03', 
            '2019-10-04',
            '2019-10-05',
            '2019-10-06',
            '2019-10-07',
            '2019-10-08',
            '2019-10-09',
            '2019-10-10',
            '2019-10-11',
            '2019-10-12',
            '2019-10-13',
            '2019-10-14',
            '2019-10-15', 
            '2019-10-16', 
            '2019-10-17', 
            '2019-10-18', 
            '2019-10-19',
            '2019-10-20',
            '2019-10-21',
            '2019-10-22',
            '2019-10-23',
            '2019-10-24',
            '2019-10-25',
            '2019-10-26',
            '2019-10-27',
            '2019-10-28',
            '2019-10-29',
            '2019-10-30',            
            '2019-10-31',            
        ]
    },
    {
        month: 'NOV',
        dates: [
            '2019-11-01',
            '2019-11-02', 
            '2019-11-03', 
            '2019-11-04',
            '2019-11-05',
            '2019-11-06',
            '2019-11-07',
            '2019-11-08',
            '2019-11-09',
            '2019-11-10',
            '2019-11-11',
            '2019-11-12',
            '2019-11-13',
            '2019-11-14',
            '2019-11-15', 
            '2019-11-16', 
            '2019-11-17', 
            '2019-11-18', 
            '2019-11-19',
            '2019-11-20',
            '2019-11-21',
            '2019-11-22',
            '2019-11-23',
            '2019-11-24',
            '2019-11-25',
            '2019-11-26',
            '2019-11-27',
            '2019-11-28',
            '2019-11-29',
            '2019-11-30'            
        ]
    },
    {
        month: 'DEC',
        dates: [
            '2019-12-01',
            '2019-12-02', 
            '2019-12-03', 
            '2019-12-04',
            '2019-12-05',
            '2019-12-06',
            '2019-12-07',
            '2019-12-08',
            '2019-12-09',
            '2019-12-10',
            '2019-12-11',
            '2019-12-12',
            '2019-12-13',
            '2019-12-14',
            '2019-12-15', 
            '2019-12-16', 
            '2019-12-17', 
            '2019-12-18', 
            '2019-12-19',
            '2019-12-20',
            '2019-12-21',
            '2019-12-22',
            '2019-12-23',
            '2019-12-24',
            '2019-12-25',
            '2019-12-26',
            '2019-12-27',
            '2019-12-28',
            '2019-12-29',
            '2019-12-30', 
            '2019-12-31' 
        ]
    },
    {
        month: 'JAN',
        dates: [
            '2020-01-01',
            '2020-01-02', 
            '2020-01-03', 
            '2020-01-04',
            '2020-01-05',
            '2020-01-06',
            '2020-01-07',
            '2020-01-08',
            '2020-01-09',
            '2020-01-10',
            '2020-01-11',
            '2020-01-12',
            '2020-01-13',
            '2020-01-14',
            '2020-01-15', 
            '2020-01-16', 
            '2020-01-17', 
            '2020-01-18', 
            '2020-01-19',
            '2020-01-20',
            '2020-01-21',
            '2020-01-22',
            '2020-01-23',
            '2020-01-24',
            '2020-01-25',
            '2020-01-26',
            '2020-01-27',
            '2020-01-28',
            '2020-01-29',
            '2020-01-30', 
            '2020-01-31' 
        ]
    }
];