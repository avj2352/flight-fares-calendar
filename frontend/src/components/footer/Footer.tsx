/**
 * PAJ - Footer Component Containing Fare Details
 */
import React, { FunctionComponent } from 'react';
import { Function } from '@babel/types';

type IFooter = {
    title: string,
    // onClick:(evt: any) => void
};

const Footer: FunctionComponent<IFooter> = (props) => {
    return (
        <React.Fragment>
            <div className="relative footer container py-6 flex flex-wrap flex-col">
                <div className="bg-blue-500 px-4 py-6 rounded text-white font-bold shadow">
                    <h2>{props.title}</h2>
                </div>
                <div
                    className="bg-blue-200 px-4 py-6 flex flex-wrap flex-row align-center justify-between font-bold shadow">
                    <p className="text-xl">THU, 14 Sep</p>
                    <p className="text-xl">$ 650 <span className="text-xs">(price per adult)</span></p>
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
        </React.Fragment>
    );
};

export default Footer;