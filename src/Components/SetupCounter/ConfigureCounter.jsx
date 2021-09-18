import React, { useContext } from "react";
import MainContext from "../../Context/MainContext";
import Counter from "./Counter";

function ConfigureCounter() {
  const {
    workTime, getWorkTime,
    shortBreakTime, getShortBreakTime,
    longBreakTime, getLongBreakTime,
    sectionsTime, getSectionsTime,
  } = useContext(MainContext);

  return (
    <div className="counter-setup">
      <section>
        <Counter timer={ workTime } setTimer={ getWorkTime } title="Focus" />
      </section>
      <section>
        <Counter timer={ shortBreakTime } setTimer={ getShortBreakTime } title="Short Break" />
      </section>
      <section>
        <Counter timer={ longBreakTime } setTimer={ getLongBreakTime } title="Long Break" />
      </section>
      <section>
        <Counter timer={ sectionsTime } setTimer={ getSectionsTime } title="Interval" />
      </section>
    </div>
  );
}

export default ConfigureCounter;
