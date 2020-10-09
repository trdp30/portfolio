import React from "react";
import "./App.less";
import "semantic-ui-less/semantic.less";
import Navigation from "./navigations";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
