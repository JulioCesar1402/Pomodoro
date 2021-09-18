import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Setup from '../Pages/Setup';
import Pomodoro from '../Pages/Pomodoro';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Setup /> } />
    <Route exact path="/Pomodoro" render={ () => <Pomodoro /> } />
  </Switch>
);
export default MainRouter;
