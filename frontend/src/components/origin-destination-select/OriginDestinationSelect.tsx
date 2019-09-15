import React, { FunctionComponent, useState, useContext, useRef } from 'react';
import Icon from 'react-icons-kit';
import { ic_swap_horiz } from 'react-icons-kit/md/ic_swap_horiz';
import { ic_swap_vert  } from 'react-icons-kit/md/ic_swap_vert';
import { AppContext } from '../../common/context/AppContext';

type ISelectOption = {
    options?: { [value: string]: string },
    onChange:(evt: any) => void
};

const OriginDestinationSelect:FunctionComponent<ISelectOption> = (props) => {
    const appContext = useContext(AppContext);
    // eventHandlers 
    const selectHandler = (evt: any) => {
        // console.log('Dropdown select', evt.target.name, evt.target.value);                
        let originRef: any = document.getElementById('origin');
        let destinationRef: any = document.getElementById('destination');
        if (evt.target.name === 'origin') {
            if (destinationRef.value === evt.target.value) {
                if (destinationRef.value  === 'SIN') originRef.value = 'KUL';
                else originRef.value = 'SIN';
                appContext.origin = originRef.value;
            }
            else {
                console.log('Setting origin value as: ', evt.target.value);
                appContext.origin = evt.target.value;
            }
        } else if (evt.target.name === 'destination') {
            if (originRef.value === evt.target.value) {
                if (originRef.value  === 'SIN') destinationRef.value = 'KUL';
                else destinationRef.value = 'SIN';
                appContext.destination = destinationRef.value;
            }
            else {
                console.log('Setting destination value as: ', evt.target.value);
                appContext.destination = evt.target.value;
            }
        } 
    }
    return (
        <React.Fragment>            
                <div className="w-full md:w-1/2 mx-2 mb-2 md:mb-0">
                    <div className="block text-white uppercase tracking-wide text-xs font-bold mb-2">From</div>
                    <div className="relative">
                        <select id="origin" name="origin" onChange={selectHandler}
                            className="block shadow appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="SIN">(SIN) Singapore</option>
                            <option value="KUL">(KUL) Kuala Lampur</option>
                            <option value="SFO">(SFO) San Fransico</option>
                        </select>
                    </div>
                </div>
                <button title="swap ports"
                className="hidden md:block block outline-none md:mt-6
                focus:outline-none hover:bg-indigo-100 self-end flex mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-1 py-1 px-2 shadow opacity-75">
                    <Icon size={30} icon={ic_swap_horiz} />                    
                </button>
                <button title="swap ports"
                className="md:hidden block outline-none md:mt-6
                focus:outline-none hover:bg-indigo-100 self-end flex mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-1 py-1 px-2 shadow opacity-75">                    
                    <Icon size={30} icon={ic_swap_vert} />
                </button>
                <div className="w-full md:w-1/2 mx-2 mb-2 md:mb-0">
                    <div className="block text-white uppercase tracking-wide text-xs font-bold mb-2">To</div>
                    <div className="relative">
                        <select id="destination" name="destination" onChange={selectHandler}
                            className="block shadow appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="KUL">(KUL) Kuala Lampur</option>
                            <option value="SIN">(SIN) Singapore</option>
                            <option value="SFO">(SFO) San Fransico</option>
                        </select>
                    </div>
                </div>                     
        </React.Fragment>
    );
}

export default OriginDestinationSelect;