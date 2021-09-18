import React from "react";

function Counter(props) {
  const { timer, setTimer, title } = props;

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
    <div className="timer-item">
      <section>
        <div className="timer-num">
          <h3 className="timer">{ timer }</h3>
        </div>
        <h2>{ title }</h2>
      </section>
      <section className="arrow-item">
        <button type="button" onClick={ () => handleIncreaseTime() } className="arrow-btn">
          <i className='bx bxs-up-arrow-circle bx-md' ></i>
        </button>
        <button type="button" onClick={ () => timer > 1 ? handleDecreaseTime() : handleTimeZero() } className="arrow-btn">
          <i className='bx bxs-down-arrow-circle bx-md' ></i>
        </button>
      </section>
    </div>
  );
}

export default Counter;
