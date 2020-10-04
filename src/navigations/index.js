import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/home";

function Navigation(params) {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default Navigation;
