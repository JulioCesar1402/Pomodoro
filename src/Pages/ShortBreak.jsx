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
    btn: "Pomodoro"
  };

  return (
    <div>
        <header className="App-header">
          <section>
            <h1 className="header-title">
              <b>Short Break</b>
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
