import React, { useEffect, useState } from "react";

function Timer() {
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(60);

  useEffect(() => {
    setMin(min - 1)
    setSec(sec - 1)
  }, [])

  useEffect(() => {
    const handleIncreaseMin = () => {
      setTimeout(() => setMin(min - 1), 60000);
    }

    const handleZeroMin = () => {
      setMin(0);
    }
    return min > 0 ? handleIncreaseMin() : handleZeroMin();
  }, [min]);

  useEffect(() => {
    const handleIncreaseSec = () => {
      setTimeout(() => setSec(sec - 1), 1000);
    }

    const handleZeroSec = () => {
      setSec(59);
    }
    return sec >= 0 ? handleIncreaseSec() : handleZeroSec();
  }, [sec]);

  const handleFormatTimer = (time) => {
    return time < 10 ? '0' + time : time
  }

  return (
    <div>
      {handleFormatTimer(min)} : { handleFormatTimer(sec) }
    </div>
  );
}

export default Timer;
