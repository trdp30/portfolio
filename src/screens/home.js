import React from "react";
import EducationContainer from "../components/education-container";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import WorkExperience from "../components/work-experience";

function Home() {
  return (
    <div className="ui container">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="ui segments">
                <div className="ui segment">
                  <Header />
                </div>
                <div className="ui segment">
                  <div className="ui stackable grid margin-no">
                    <div className="ten wide column">
                      <WorkExperience />
                      <Projects />
                    </div>
                    <div className="six wide column">
                      <Skills />
                      <EducationContainer />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
