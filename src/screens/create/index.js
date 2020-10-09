import React from "react";
import EducationContainer from "../../components/education-container";
import Header from "../../components/header";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import WorkExperience from "../../components/work-experience";

function Create() {
  return (
    <div className="ui container">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="ui segments box-shadow-none border-none margin-ten-horizontal">
                <div className="ui segment padding-no-vertical">
                  <Header isCreateView={true} />
                </div>
                <div className="ui segment padding-no">
                  <div className="ui stackable grid margin-no">
                    <div className="six wide column padding-vs">
                      <WorkExperience />
                      <Skills />
                      <EducationContainer />
                    </div>
                    <div className="ten wide column padding-vs">
                      <Projects />
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

export default Create;
