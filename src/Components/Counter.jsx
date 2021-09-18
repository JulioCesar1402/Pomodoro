import React, { useState } from "react";

function Counter({ prop }) {
  console.log(prop);
  const [workTime, getWorkTime] = useState(25);

  const handleDecreaseTime = () => {
    getWorkTime(workTime - 1)
  }

  const handleIncreaseTime = () => {
    getWorkTime(workTime + 1)
  }

  const handleTimeZero = () => {
    getWorkTime(0)
  }

  return (
    <div>
      <section>
        <h3>{ workTime }</h3>
      </section>
      <section>
        <button type="button" onClick={ () => handleIncreaseTime() }>
          Increase Time
        </button>
        <button type="button" onClick={ () => workTime > 0 ? handleDecreaseTime() : handleTimeZero() }>
          Decrease Time
        </button>
      </section>
    </div>
  );
}

export default Counter;
