import React from "react";
import Header from "../components/header";
import Skills from "../components/skills";
import WorkExperience from "../components/work-experience";

function Home() {
  return (
    <div className="ui container">
      <div className="ui segments">
        <div className="ui segment">
          <Header />
        </div>
        <div className="ui segment">
          <div className="ui grid margin-no">
            <div className="ten wide column">
              <WorkExperience />
            </div>
            <div className="six wide column">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
