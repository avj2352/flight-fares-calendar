// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../common/context/AppContext';
import AirplaneIcon from './../icons/AirplaneIcon';


// our components props accept a number for the initial value
const Navbar:FunctionComponent<{}> = () => {
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
        <nav id="header" className=" fixed w-full z-30 top-0 bg-blue-500 shadow">    
        <div className="navbar w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">                
            <div className="pl-4 flex">
              <AirplaneIcon color={`white`}/>
                <a className="toggleColour text-white no-underline hover:no-underline font-bold lg:text-2xl ml-2"  href="#"> 
                     {appContext.name.toLocaleUpperCase()}
                </a>
            </div>            
            <button onClick={displayAppInfo} className="outline-none focus:outline-none hover:bg-indigo-100 self-end flex mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-2 py-2 px-8 shadow opacity-75">About</button>
        </div>        
        <hr className="border-b border-blue-800 opacity-25 my-0 py-0" />
    </nav>
    </React.Fragment>
  );
  
}

export default Navbar;