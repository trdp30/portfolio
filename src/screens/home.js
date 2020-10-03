import React from "react";
import Header from "../components/header";

function Home() {
  return (
    <div className="ui container">
      <div className="ui segments">
        <div className="ui segment">
          <Header />
        </div>
        <div className="ui segment">
          <div className="ui grid margin-no">
            <div className="ten wide column"></div>
            <div className="six wide column"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
