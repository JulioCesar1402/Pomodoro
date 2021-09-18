import React, { useEffect, useState } from "react";

function Timer(props) {
  const { template } = props;
  const [min, setMin] = useState(template);
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

  return (
    <div>
      <div>{handleFormatTimer(min)} : { handleFormatTimer(sec) }</div>
    </div>
  );
}

export default Timer;
