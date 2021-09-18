import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import MainRouter from './Router/MainRouter';

function App() {
  return (
    <Provider>
      <div className="App">
        <section>
          <MainRouter />
        </section>
      </div>
    </Provider>
  );
}

export default App;
