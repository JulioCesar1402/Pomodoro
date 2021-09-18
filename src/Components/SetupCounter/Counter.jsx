import React from "react";

function Counter(props) {
  const { timer, setTimer } = props;

  const handleDecreaseTime = () => {
    setTimer(timer - 1)
  }

  const handleIncreaseTime = () => {
    setTimer(timer + 1)
  }

  const handleTimeZero = () => {
    setTimer(1)
  }

  return (
    <div>
      <section>
        <h3>{ timer }</h3>
      </section>
      <section>
        <button type="button" onClick={ () => handleIncreaseTime() }>
          Increase Time
        </button>
        <button type="button" onClick={ () => timer > 1 ? handleDecreaseTime() : handleTimeZero() }>
          Decrease Time
        </button>
      </section>
    </div>
  );
}

export default Counter;
