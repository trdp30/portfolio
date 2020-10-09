import React from "react";
import { Route, Switch } from "react-router-dom";
import Create from "../screens/create";
import Home from "../screens/home";

function Navigation(params) {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Create} />
    </Switch>
  );
}

export default Navigation;
