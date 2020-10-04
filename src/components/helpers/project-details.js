import React from "react";
import PropTypes from "prop-types";
import RoleView from "./role-view";
import KeywordView from "./keyword-view";

function ProjectDetails({ data }) {
  return (
    <div className="ui segment float-clear padding-vs-vertical box-shadow-none">
      <p className="margin-five-bottom text-weight-medium text-size-normal">
        {data.name}{" "}
        <span className="text-weight-normal text-size-small float-right">
          Framework: <span className="text-weight-medium">{data.framework}</span>
        </span>
      </p>
      <p className="margin-five-bottom">{data.description}</p>
      <p className="margin-five-bottom ">
        Role: <RoleView data={data.roles} />
      </p>
      <p className="margin-five-bottom text-size-average">
        Base tools: <KeywordView data={data.keywords} />
      </p>
    </div>
  );
}

export default ProjectDetails;

ProjectDetails.propTypes = {
  data: PropTypes.object.isRequired
};
