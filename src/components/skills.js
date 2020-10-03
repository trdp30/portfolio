import React from "react";
import ContentHeader from "./helpers/content-header";
import SkillCard from "./helpers/skill-card";

function Skills() {
  const skills = [
    { name: "JavaScript", value: 80 },
    { name: "React.js", value: 85 },
    { name: "Ember.js", value: 85 },
    { name: "React Native", value: 75 },
    { name: "Cascading Style Sheets", value: 75 },
    { name: "GitHub/Gitlab", value: 85 },
    { name: "Agile Project Management", value: 75 },
    { name: "Scrum", value: 95 }
  ];
  return (
    <div className="ui segments">
      <ContentHeader title="Skills & Competences" />
      <div className="ui segment">
        <div className="ui grid margin-no">
          {skills.map((skill, i) => (
            <SkillCard key={i} data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
