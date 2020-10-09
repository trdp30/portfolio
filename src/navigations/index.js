import React from "react";
import { Route, Switch } from "react-router-dom";
import Create from "../screens/create";
import Home from "../screens/home";

function Navigation(params) {
  return (
    <Switch>
      <Route path="/create" exact={true} component={Create} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Navigation;
