/**
 * PAJ - Footer Component Containing Fare Details
 */
import React, { FunctionComponent } from 'react';
import { Function } from '@babel/types';

type IFooter = {
    title: string,
    display: boolean,
    date: number,
    amount: string,
    month: string,
    day: string
};

const Footer: FunctionComponent<IFooter> = (props) => {
    const { date, amount, month, day } = props;
    const footer = props.display && <div className="relative footer container py-6 flex flex-wrap flex-col">
                    <div className="bg-blue-500 px-4 py-6 rounded text-white font-bold shadow">
                        <h2>{props.title}</h2>
                    </div>
                    <div
                        className="bg-blue-200 px-4 py-6 flex flex-wrap flex-row align-center justify-between font-bold shadow">
                        <p className="text-xl">{day}, {date} {month}</p>
                        <p className="text-xl ml-2">{amount} <span className="text-xs">(price per adult)</span></p>
                        <button className="                    
                        outline-none 
                        focus:outline-none 
                        hover:bg-indigo-100
                        flex mx-auto 
                        lg:mx-0 
                        bg-white 
                        text-gray-800 
                        font-bold 
                        rounded-full                    
                        py-2 
                        px-8 
                        shadow 
                        opacity-75">SHOW FLIGHTS</button>
                    </div>
                </div>
    return (
        <React.Fragment>
            {footer}
        </React.Fragment>
    );
};

export default Footer;