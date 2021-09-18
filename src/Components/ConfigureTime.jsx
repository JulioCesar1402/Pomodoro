import React, { useContext } from "react";
import Counter from "./Conter";

function ConfigureTime() {
  const {
    workTime, getWorkTime,
    breakTime, getBreakTime,
    sectionsTime, getSectionsTime,
  } = useContext

  return (
    <div>
      <Counter prop={ workTime, getWorkTime } />
      <Counter prop={ breakTime, getBreakTime } />
      <Counter prop={ sectionsTime, getSectionsTime } />
    </div>
  );
}

export default ConfigureTime;
