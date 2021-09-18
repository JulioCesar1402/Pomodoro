import React, { useContext } from "react";
import MainContext from "../../Context/MainContext";
import Counter from "./Counter";

function ConfigureCounter() {
  const {
    workTime, getWorkTime,
    breakTime, getBreakTime,
    sectionsTime, getSectionsTime,
  } = useContext(MainContext);

  return (
    <div>
      <section>
        <Counter timer={ workTime } setTimer={ getWorkTime } />
        Focus
      </section>
      <section>
        <Counter timer={ breakTime } setTimer={ getBreakTime } />
        Break
      </section>
      <section>
        <Counter timer={ sectionsTime } setTimer={ getSectionsTime } />
        Interval
      </section>
    </div>
  );
}

export default ConfigureCounter;
