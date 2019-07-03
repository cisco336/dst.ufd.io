import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Dashboard from "./dashboard";
import Inicio from "../inicio";
import Login from "./login";

const Settings = props => {
    return (
        <Router>
            <Switch>
                <Route exact path="/settings/login" component={Login} />
                <Route path="/settings/dashboard" component={Dashboard} />
                <Redirect to="/" component={Inicio} />
            </Switch>
        </Router>
    );
};

export default Settings;
