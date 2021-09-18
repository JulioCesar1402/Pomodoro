import React, { useContext } from "react";
import Timer from "../Components/PomodoroTimer/Timer";
import MainContext from "../Context/MainContext";

function Pomodoro() {
  const { workTime } = useContext(MainContext);
  return (
    <div>
        <header className="App-header">
          <h1 className="header-title">
            Pomodoro
          </h1>
          <section>
            <Timer template={ workTime } />
          </section>
        </header>
    </div>
  );
}

export default Pomodoro;
