import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import MainRouter from './Router/MainRouter';

function App() {
  return (
    <Provider>
      <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
      <div className="App">
        <section>
          <MainRouter />
        </section>
      </div>
    </Provider>
  );
}

export default App;
