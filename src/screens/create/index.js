import React from "react";
import PersonalDetails from "../../components/helpers/personal-details";
import SkillDetails from "../../components/helpers/skill-details";

function Create() {
  return (
    <div className="ui container">
      <div
        className="ui centered statckable grid margin-no"
        style={{ height: "calc(100vh - 20px)" }}
      >
        <div className="middle aligned column height-full">
          <SkillDetails />
        </div>
      </div>
    </div>
  );
}

export default Create;
