import React from "react";
import ContentHeader from "./helpers/content-header";
import EducationDetails from "./helpers/education-details";

function EducationContainer() {
  const educationList = [
    {
      name: "Sikkim Manipal Institute of Technology (SMIT)",
      course: "Master of Computer Applications - MCA",
      duration: "2015 – 2018"
    }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no">
      <ContentHeader title="Education" />
      <div className="ui segment box-shadow-none padding-no">
        <div className="ui segments box-shadow-none border-none">
          {educationList.map((data, i) => (
            <EducationDetails key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationContainer;
