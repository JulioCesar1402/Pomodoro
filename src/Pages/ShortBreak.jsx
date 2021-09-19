import React, { useContext } from "react";
import BackToSetup from "../Components/BackToSetup";
import Timer from "../Components/PomodoroTimer/Timer";
import MainContext from "../Context/MainContext";

function ShortBreak() {
  const { shortBreakTime, countSectionsBreak, getCountSectionsBreak, sectionsTime } = useContext(MainContext);
  const template = {
    time: shortBreakTime,
    countSections: countSectionsBreak,
    getCountSections: getCountSectionsBreak,
    sectionsTime,
    btn: "Pomodoro",
    type: "short",
    title: "Short Break",
    message: "It's time to get back to work"

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

export default ShortBreak;
