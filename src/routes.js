import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./module/Admin";
import Viewer from './module/viewer';


const routes = (
    <Switch>
        <Route path="/user" component={Viewer}/>
        <Route path="/" exact component={Admin} />
    </Switch>
)

export default routes;