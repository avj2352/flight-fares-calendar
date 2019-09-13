import React, { useContext } from 'react';
import { AppContext } from '../common/context/AppContext';

const App = () => {
  const appContext = useContext(AppContext);

  return (
    <div className="App bg-blue-300">
      <header className="App-header">        
        <p>
          Edit <code>src/App.js</code> and save to reload. {appContext.version}
        </p>        
      </header>
    </div>
  );
};

export default App;
