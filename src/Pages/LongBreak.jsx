import React, { useContext } from "react";
import BackToSetup from "../Components/BackToSetup";
import Timer from "../Components/PomodoroTimer/Timer";
import MainContext from "../Context/MainContext";

function LongBreak() {
  const { LongBreakTime, countSectionsBreak, getCountSectionsBreak, sectionsTime } = useContext(MainContext);
  const template = {
    time: LongBreakTime,
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
              <b>Long Break</b>
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

export default LongBreak;
