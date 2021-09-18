import React from "react";
import { Link } from "react-router-dom";
import ConfigureTime from "../Components/SetupCounter/ConfigureTime";

function Setup() {
  return (
    <div>
        <header className="App-header">
          <h1 className="header-title">
            Pomodoro
          </h1>
        </header>
      <ConfigureTime />
      <section>
        <Link to="/Pomodoro">
          <button type="button">
            Start
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Setup;
