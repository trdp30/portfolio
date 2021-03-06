import React from "react";
import ContentHeader from "./helpers/content-header";
import ProjectDetails from "./helpers/project-details";

function Projects() {
  const projectsList = [
    {
      name: "Recruit",
      roles: ["Maintainer", "Enhancer"],
      description:
        "Talview Recruit is a admin platform for the recruiters to schedule an interview and evaluat later or live.",
      framework: "EmberJS",
      keywords: ["emberjs", "ember-data", "semantic-ui", "sentry"]
    },
    {
      name: "Candidate",
      roles: ["Maintainer", "Enhancer"],
      description:
        "Talview Candidate is a assessment platform where candidate can attend a scheduled interview.",
      framework: "EmberJS",
      keywords: ["emberjs", "ember-data", "semantic-ui", "sentry"]
    },
    {
      name: "Proview client",
      roles: ["Maintainer", "Enhancer"],
      description:
        "Proview Client is a activity capture platform. Its capture events like `multiple face detection`, `copy/paste`, `record screen activity` etc. which are used to evaluate a candidate's assessment",
      framework: "BackboneJs",
      keywords: ["backbone", "grunt", "browserify", "jquery", "sentry"]
    },
    {
      name: "Proview Live Proctor",
      roles: ["Creator", "Maintainer", "Enhancer"],
      description:
        "Proview Live proctoring is a real time proctoring platform, where the proctor able to see the video and screen of the candidate and able to intervene through the chat if the candidate is cheating.",
      framework: "ReactJs",
      keywords: [
        "react",
        "redux",
        "webpack",
        "semantic-ui",
        "craco",
        "react-table",
        "getstream.io",
        "sentry"
      ]
    },
    {
      name: "Passage Question",
      roles: ["Creator", "Maintainer", "Enhancer"],
      description:
        "This is a assessment platform where candidate can give passage question type interview round.",
      framework: "ReactJs",
      keywords: ["react", "redux", "webpack", "semantic-ui", "craco", "sentry"]
    },
    {
      name: "Custom Form",
      roles: ["Troubleshooter"],
      description:
        "This application content the forms those are required for fillup before taking up an assessment and for the the evaluation process.",
      framework: "Hugo",
      keywords: ["hugo", "jQuery", "semantic-ui", "sentry"]
    },
    // {
    //   name: "Pages",
    //   roles: ["Troubleshooter"],
    //   description: "This application content the landing page required for different organisation",
    //   framework: "Hugo",
    //   keywords: ["hugo", "jQuery", "semantic-ui", "sentry"]
    // },
    {
      name: "Homswag",
      roles: ["Architecture", "Creator", "Maintainer", "Enhancer"],
      description:
        "Homswag is a freelancing mobile(android/ios) application project. It is a Banglore based startup in Salon industry. The application has functionality from placing appointment to track current appointment status",
      framework: "React Native",
      keywords: ["react-native", "react-navigation", "react-native-maps", "redux", "sentry"]
    }
  ];
  return (
    <div className="ui segments box-shadow-none margin-no">
      <ContentHeader title="Project" />
      <div className="ui segment box-shadow-none padding-no">
        <div className="ui segments box-shadow-none border-none">
          {projectsList.map((project, i) => (
            <ProjectDetails key={i} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
