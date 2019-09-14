// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../common/context/AppContext';
import Navbar from './../../components/navbar/Navbar';
import RadioGroup from './../../components/radio-group/RadioGroup';
import WaveIcon from './../../components/icons/WaveIcon';


// our components props accept a number for the initial value
const Dashboard:FunctionComponent<{}> = () => {
  const appContext = useContext(AppContext);  

  // event handling
  const displayAppInfo = ():void => {
      appContext.addNotification('ABOUT', `${appContext.name} version ${appContext.version}`, 'info', 2000);
  }

  //componentDidMount
  useEffect(()=>{    
  },[]);

  return (    
    <React.Fragment>
      <Navbar />
      <div className="py-24 gradient text-white">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center items-start text-left">
            <p className="uppercase tracking-loose w-full">Fill in the below flight details</p>
            <RadioGroup />
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="block text-white uppercase tracking-wide text-xs font-bold mb-2">From</div>
              <div className="relative">
                <select
                  className="block shadow appearance-none w-full md:w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state">
                  <option>Singapore (SIN)</option>
                  <option>Kuala Lampur (KUL)</option>
                  <option>San Fransico (SFO)</option>
                </select>
              </div>
            </div>
            <div className="w-full flex flex-wrap flex-row justify-center">
              <button
                className="outline-none focus:outline-none hover:bg-indigo-100 self-end flex mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-2 py-2 px-8 shadow opacity-75">Find
                Fares</button>
            </div>
          </div>
        </div>
      <WaveIcon/>
      </div>
    </React.Fragment>
  );
  
}

export default Dashboard;