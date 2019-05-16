import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from './Components/Landing';
import Info from './Components/Info';
import Desk from './Components/Desk';
import InfoTech from "./Components/InfoTech/InfoTech";
import BombFrame from "./Components/BombFrame/BombFrame";

export default (
    <Switch>
        <Route component={ Landing } path='/' exact />
        <Route component={ Info } path='/info-page' />
        <Route component={ Desk } path='/desk' />
        <Route component={ InfoTech } path='/info-tech-page' />
        <Route component={ BombFrame } path='/bomb-frame' />
        <Route  />
        <Route  />
        <Route  />
    </Switch>
)