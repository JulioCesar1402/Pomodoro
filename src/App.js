import React from 'react';
import ConfigureTime from "./Components/ConfigureTime"
import Provider from './Context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <h1 className="header-title">
            Pomodoro
          </h1>
        </header>
        <section>
          <ConfigureTime />
        </section>
      </div>
    </Provider>
  );
}

export default App;
