import React, { useContext } from 'react';
import { AppContext } from '../common/context/AppContext';
import Navbar from './../components/navbar/Navbar';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


const App = () => {
  const appContext = useContext(AppContext);

  return (
    <React.Fragment>
      <ReactNotification/>
      <Navbar/>      
    </React.Fragment>
  );
};

export default App;
