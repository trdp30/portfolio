import React from "react";
import ContentHeader from "./helpers/content-header";
import SkillCard from "./helpers/skill-card";

function Skills() {
  const skills = [
    { name: "JavaScript", value: 80 },
    { name: "HTML", value: 85 },
    { name: "Cascading Style Sheets", value: 75 },
    { name: "ReactJs", value: 85 },
    { name: "EmberJs", value: 85 },
    { name: "React Native", value: 75 },
    { name: "BackboneJs", value: 60 },
    { name: "GitHub/Gitlab", value: 85 },
    { name: "Agile Project Management", value: 75 },
    { name: "Scrum", value: 95 },
    { name: "Problem Solving", value: 100 },
    { name: "Mentorship", value: 100 }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no margin-five-bottom">
      <ContentHeader title="Skills & Competences" />
      <div className="ui segment box-shadow-none padding-vs-horizontal">
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
