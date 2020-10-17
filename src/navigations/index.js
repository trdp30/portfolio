import React from "react";
import { Route, Switch } from "react-router-dom";
import Calendar from "../screens/calendar";
import Home from "../screens/home";

function Navigation(params) {
  return (
    <Switch>
      {/* <Route path="/home" component={Home} /> */}
      <Route path="/calendar" component={Calendar} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Navigation;
