import React, { useContext } from "react";
import Timer from "../Components/PomodoroTimer/Timer";
import MainContext from "../Context/MainContext";

function Pomodoro() {
  const { workTime, countSectionsPomodoro, getCountSectionsPomodoro, sectionsTime } = useContext(MainContext);
  const template = {
    time: workTime,
    countSections: countSectionsPomodoro,
    getCountSections: getCountSectionsPomodoro,
    sectionsTime,
    btn: "Break"
  };

  return (
    <div>
        <header className="App-header">
          <h1 className="header-title">
            Pomodoro
          </h1>
          <section>
            <Timer template={ template } />
          </section>
        </header>
    </div>
  );
}

export default Pomodoro;
