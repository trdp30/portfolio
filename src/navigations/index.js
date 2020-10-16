import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/home";
import Resume from "../screens/resume";

function Navigation(params) {
  return (
    <Switch>
      <Route path="/resume" exact={true} component={Resume} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Navigation;
