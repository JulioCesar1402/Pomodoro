import React from "react";
import Timer from "../Components/PomodoroTimer/Timer";

function Pomodoro() {
  return (
    <div>
        <header className="App-header">
          <h1 className="header-title">
            Pomodoro
          </h1>
          <section>
            <Timer />
          </section>
        </header>
    </div>
  );
}

export default Pomodoro;
