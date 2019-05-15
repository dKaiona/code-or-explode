import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from './Components/Landing';
import Info from './Components/Info';
import Main from './Components/Main';
import InfoTech from "./Components/InfoTech/InfoTech";

export default (
    <Switch>
        <Route component={ Landing } path='/' exact />
        <Route component={ Info } path='/info-page' />
        <Route component={ Main } path='/main' />
        <Route component={ InfoTech } path='/info-tech-page' />
        <Route  />
        <Route  />
        <Route  />
    </Switch>
)