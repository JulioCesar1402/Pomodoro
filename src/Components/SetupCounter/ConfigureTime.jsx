import React, { useContext } from "react";
import MainContext from "../../Context/MainContext";
import Counter from "./Counter";

function ConfigureTime() {
  const {
    workTime, getWorkTime,
    breakTime, getBreakTime,
    sectionsTime, getSectionsTime,
  } = useContext(MainContext);

  return (
    <div>
      <Counter timer={ workTime } setTimer={ getWorkTime } />
      <Counter timer={ breakTime } setTimer={ getBreakTime } />
      <Counter timer={ sectionsTime } setTimer={ getSectionsTime } />
    </div>
  );
}

export default ConfigureTime;
