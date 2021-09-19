import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Button(boolean, template) {
  const { countSections, getCountSections, sectionsTime, btn } = template;
  const [btnPath, setBtnPath] = useState('short');

  useEffect(() => {
    countSections.length % sectionsTime === 0 ? setBtnPath('long') : setBtnPath('short')
  }, [countSections, sectionsTime])

  const handleCountSections = () => {
    const array = ["."]
    return countSections.length !== sectionsTime ? getCountSections( array.concat(countSections)) : getCountSections(countSections)
  }

  if (btn !== "Pomodoro") {
    return boolean ?
    <Link to={`/${btnPath}-break`} >
      <button type="button" className="btn-pomodoro" onClick={() => handleCountSections()} ><i class='bx bxs-right-arrow bx-lg'></i></button>
    </Link>
    : <button type="button" className="btn-pomodoro-disabled" disabled="true"><i class='bx bxs-right-arrow bx-lg'></i></button>
  } else {
    return boolean ?
    <Link to={`/pomodoro`} >
      <button type="button" className="btn-pomodoro" onClick={() => handleCountSections()} ><i class='bx bxs-right-arrow bx-lg'></i></button>
    </Link>
    : <button type="button" className="btn-pomodoro-disabled" disabled="true"><i class='bx bxs-right-arrow bx-lg'></i></button>
  }

};


function Timer({ template }) {
  const { time, type, title, message } = template;
  const [min, setMin] = useState(time);
  const [sec, setSec] = useState(60);


  useEffect(() => {
    setMin(min - 1)
    setSec(sec - 1)
  }, [])

  // Por conta do tempo para executar a função, é necessário aumentar em um segundo o cronometro
  // caso contrario ele travará com um minuto de atraso
  useEffect(() => {
    const handleIncreaseMin = () => {
      const timer = min <= 1 ? 61000 : 60000;
      setTimeout(() => setMin(min - 1), timer);
    }

    const handleZeroMin = () => {
      setMin(0)
    }
    return min > 0 ? handleIncreaseMin() : handleZeroMin();
  }, [min]);

  useEffect(() => {
    const handleIncreaseSec = () => {
      setTimeout(() => setSec(sec - 1), 1000);
    }

    const handleRestoreSec = () => {
      return (min === 0 && sec <= 0) ? setSec(0) : setSec(59);
    }

    return sec >= 0 ? handleIncreaseSec() : handleRestoreSec();
  }, [sec, min]);

  const handleFormatTimer = (time) => {
    return time < 10 ? '0' + time : time
  }

  useEffect(() => {
    setTimeout(() => alert(message), time * 60000);
  }, [time, message])

  return (
    <div className="body-pomo">
      <div className="next-moment">
        <div className="circular-border">
          <div className={`circular-${type}`}>
            <h3 className="timer"><b>{handleFormatTimer(min)} : { handleFormatTimer(sec) }</b></h3>
            <h6 className="title">{ title }</h6>
          </div>
        </div>
      </div>
        <section>
          { min === 0 && sec === 0 ? Button(true, template) : Button(false, template)}
        </section>
      </div>
  );
}

export default Timer;
