import React from "react";
import { Link } from "react-router-dom";
import ConfigureCounter from "../Components/SetupCounter/ConfigureCounter";

function Setup() {
  return (
    <div>
        <header className="App-header">
          <h1 className="header-title">
            <b>Pomodoro</b>
          </h1>
        </header>
      <ConfigureCounter />
      <section>
        <Link to="/pomodoro">
          <button type="button" className="button">
            <b>Start</b>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Setup;
