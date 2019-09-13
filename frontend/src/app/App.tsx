import React, { useContext } from 'react';
import { AppContext } from '../common/context/AppContext';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Dashboard from '../views/dashboard/Dashboard';


const App = () => {
  const appContext = useContext(AppContext);

  return (
    <React.Fragment>
      <ReactNotification/>
      <Dashboard/>
    </React.Fragment>
  );
};

export default App;
