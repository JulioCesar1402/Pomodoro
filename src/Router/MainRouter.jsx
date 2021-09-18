import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Setup from '../Pages/Setup';
import Pomodoro from '../Pages/Pomodoro';
import Break from '../Pages/Break';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Setup /> } />
    <Route exact path="/pomodoro" render={ () => <Pomodoro /> } />
    <Route exact path="/break" render={ () => <Break /> } />
  </Switch>
);
export default MainRouter;
