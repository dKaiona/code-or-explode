import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from './Components/Landing';
import Info from './Components/Info';
import Main from './Components/Main';
import CodeEditor from './Components/CodeEditor/CodeEditor'
import BombFrame from './Components/BombFrame/BombFrame'

export default (
    <Switch>
        <Route component={ Landing } path='/' exact />
        <Route component={ Info } path='/info-page' />
        <Route component={ Main } path='/main' />
        <Route component={ CodeEditor } path='/code-editor' />
        <Route component={ BombFrame } path='/bombframe' />
        <Route  />
        <Route  />
    </Switch>
)