import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Setup from '../Pages/Setup';
import Pomodoro from '../Pages/Pomodoro';
import ShortBreak from '../Pages/ShortBreak';
import LongBreak from '../Pages/LongBreak';

const MainRouter = () => (
  <Switch>
    <Route exact path="/" render={ () => <Setup /> } />
    <Route exact path="/pomodoro" render={ () => <Pomodoro /> } />
    <Route exact path="/short-break" render={ () => <ShortBreak /> } />
    <Route exact path="/long-break" render={ () => <LongBreak /> } />
  </Switch>
);
export default MainRouter;
