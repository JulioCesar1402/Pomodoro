import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Button(boolean, template) {
  const { countSections, getCountSections, sectionsTime, btn } = template;

  const handleCountSections = () => {
    const array = ["."]
    return countSections.length !== sectionsTime ? getCountSections( array.concat(countSections)) : getCountSections(countSections)
  }

  return boolean ?
    <Link to="/break">
      <button type="button" onClick={() => handleCountSections()} >{btn}</button>
    </Link>
    : <button type="button" disabled="true">{btn}</button>

};


function Timer({ template }) {
  const { time, countSections } = template;
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

  // const handleAlert = () => {
  //   if ( min === 0 && sec === 0 ) {
  //     return Button(true, template) &&
  //   }
  // }

  return (
    <div>
      <div>{handleFormatTimer(min)} : { handleFormatTimer(sec) }</div>
      <section>{countSections.map((item) => item) }</section>
      <section>
      { min === 0 && sec === 0 ? Button(true, template) : Button(false, template)}
      </section>
    </div>
  );
}

export default Timer;
