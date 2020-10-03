import React from "react";
import ContentHeader from "./helpers/content-header";
import ExperienceDetails from "./helpers/experience-details";

function WorkExperience() {
  const jobDetails = [
    {
      image_url: "/assets/images/talview.png",
      role: "Front-end developer",
      org: "Talview",
      duration: "Jun 2018 – Present (2 yrs 5 mos)"
    },
    {
      image_url: "/assets/images/talview.png",
      role: "Frontend Developer Intern",
      org: "Talview",
      duration: "Jan 2018 – Apr 2018 (4 mos)"
    }
  ];
  return (
    <div className="ui segments">
      <ContentHeader title="Work Experience" />
      <div className="ui segment">
        <div className="ui segments">
          {jobDetails.map((data, i) => (
            <ExperienceDetails key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
