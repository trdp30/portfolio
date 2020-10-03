import React from "react";
import SkillCard from "./helpers/skill-card";

function Skills() {
  const skills = [
    { name: "JavaScript", value: 50 },
    { name: "Ember.js", value: 50 },
    { name: "Gitlab", value: 50 },
    { name: "Agile Project Management", value: 50 },
    { name: "Scrum", value: 50 },
    { name: "GitHub", value: 50 },
    { name: "React.js", value: 50 },
    { name: "React Native", value: 50 },
    { name: "Cascading Style Sheets (CSS)", value: 50 },
    { name: "Semantic HTML", value: 50 }
  ];
  return (
    <div className="ui segments">
      <div className="ui segment">
        <p className="text-weight-medium text-size-large">Skills & Competences</p>
      </div>
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
