import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [workTime, getWorkTime] = useState(25);
  const [breakTime, getBreakTime] = useState(5);
  const [sectionsTime, getSectionsTime] = useState(3);
  const [countSectionsPomodoro, getCountSectionsPomodoro] = useState(["."]);
  const [countSectionsBreak, getCountSectionsBreak] = useState(["."]);

  const context = {
    workTime, getWorkTime,
    breakTime, getBreakTime,
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
