import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [workTime, getWorkTime] = useState(25);
  const [shortBreakTime, getShortBreakTime] = useState(5);
  const [longBreakTime, getLongBreakTime] = useState(10);
  const [sectionsTime, getSectionsTime] = useState(3);
  const [countSectionsPomodoro, getCountSectionsPomodoro] = useState(["."]);
  const [countSectionsBreak, getCountSectionsBreak] = useState(["."]);

  const context = {
    workTime, getWorkTime,
    shortBreakTime, getShortBreakTime,
    longBreakTime, getLongBreakTime,
    sectionsTime, getSectionsTime,
    countSectionsPomodoro, getCountSectionsPomodoro,
    countSectionsBreak, getCountSectionsBreak
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
