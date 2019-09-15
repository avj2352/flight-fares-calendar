// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../common/context/AppContext';
import Navbar from './../../components/navbar/Navbar';
import WaveIcon from './../../components/icons/WaveIcon';
import {ISession, createSession} from './../../common/async/async-requests';
import FlightCalendar from '../../components/calendar/FlightCalendar';
import Footer from '../../components/footer/Footer';
import FareDetailsForm from '../../components/fare-details-form/FareDetailsForm';

// our components props accept a number for the initial value
const Dashboard:FunctionComponent<{}> = () => {
  const appContext = useContext(AppContext);  

  // event handling
  const displayAppInfo = ():void => {
      appContext.addNotification('ABOUT', `${appContext.name} version ${appContext.version}`, 'info', 2000);
  }

  const dateHandler = (date: any) => {
    console.log('Date Changed !', date);
  }

  const submitForm = (evt: any) => {
    const noticeId = appContext.addNotification('FETCHING DETAILS', `Fetching Details, please wait...`, 'info', 5000);    
    const session: ISession = {
      origin: 'SIN',
      destination: 'KUL',
      sDate: `2019-09-14`,
      eDate: `2019-09-30`
    };

    createSession(session)
    .then (result => {
      appContext.removeNotification(noticeId);
      console.log('response is: ', result.data);
    });
  };

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
            <FareDetailsForm onSubmit={submitForm}/>
            <div className="w-full relative flex flex-wrap flex-row justify-center">
              <FlightCalendar onChange={dateHandler}/>
            </div>

          </div>
        </div>
      <WaveIcon/>
      </div>
      <Footer title={`FARE DETAILS`}/>
    </React.Fragment>
  );
  
}

export default Dashboard;