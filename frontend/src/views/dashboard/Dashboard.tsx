// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../common/context/AppContext';
import Navbar from './../../components/navbar/Navbar';
import RadioGroup from './../../components/radio-group/RadioGroup';
import WaveIcon from './../../components/icons/WaveIcon';
import OriginDestinationSelect from './../../components/origin-destination-select/OriginDestinationSelect';
import Select from './../../components/select/Select';
import RoundedButton from '../../components/buttons/RoundedButton';


// our components props accept a number for the initial value
const Dashboard:FunctionComponent<{}> = () => {
  const appContext = useContext(AppContext);  

  // event handling
  const displayAppInfo = ():void => {
      appContext.addNotification('ABOUT', `${appContext.name} version ${appContext.version}`, 'info', 2000);
  }

  const submitForm = (evt: any) => {
    appContext.addNotification('FETCHING DETAILS...', `Fetching Fares, please wait...`, 'info', 5000);
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
            <p className="mt-2 md:mt-0 mx-2 uppercase tracking-loose w-full">Fill in the below flight details</p>
            <RadioGroup />
            <div className="w-full flex flex-1 flex-col align-center md:flex-row">
              <OriginDestinationSelect/>
              <Select title={`Depart - Return`}/>
              <Select title={`Cabin, Class & Travellers`}/>
            </div>
            <div className="w-full flex flex-wrap flex-row justify-center">
              <RoundedButton title="Find Fares" onClick={submitForm}/>
            </div>
              
          </div>
        </div>
      <WaveIcon/>
      </div>
    </React.Fragment>
  );
  
}

export default Dashboard;