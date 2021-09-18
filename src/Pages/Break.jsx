import React, { useContext } from "react";
import Timer from "../Components/PomodoroTimer/Timer";
import MainContext from "../Context/MainContext";

function Break() {
  const { breakTime, countSectionsBreak, getCountSectionsBreak, sectionsTime } = useContext(MainContext);
  const template = {
    time: breakTime,
    countSections: countSectionsBreak,
    getCountSections: getCountSectionsBreak,
    sectionsTime,
    btn: "Pomodoro"
  };

  return (
    <div>
        <header className="App-header">
          <h1 className="header-title">
            Break
          </h1>
          <section>
            <Timer template={ template } />
          </section>
        </header>
    </div>
  );
}

export default Break;
