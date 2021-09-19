import React, { useContext } from "react";
import BackToSetup from "../Components/BackToSetup";
import Timer from "../Components/PomodoroTimer/Timer";
import MainContext from "../Context/MainContext";

function Pomodoro() {
  const { workTime, countSectionsPomodoro, getCountSectionsPomodoro, sectionsTime } = useContext(MainContext);
  const template = {
    time: workTime,
    countSections: countSectionsPomodoro,
    getCountSections: getCountSectionsPomodoro,
    sectionsTime,
    btn: "Break",
    type: "pomo",
    title: "Work",
    message: "It's time for a break"
  };

  return (
    <div>
        <header className="App-header">
          <section className="pomo-header">
            <h1 className="header-title">
              <b>Pomodoro</b>
            </h1>
            <BackToSetup />
          </section>
          <section>
            <Timer template={ template } />
          </section>
        </header>
    </div>
  );
}

export default Pomodoro;
