import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from './Components/Landing';
import Info from './Components/Info';
import Main from './Components/Main';

export default (
    <Switch>
        <Route component={ Landing } path='/' exact />
        <Route component={ Info } path='/info-page' />
        <Route  component={ Main } path='/main' />
        <Route  />
        <Route  />
        <Route  />
        <Route  />
    </Switch>
)