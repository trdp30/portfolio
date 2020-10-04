import React, { Fragment } from "react";
import PropTypes from "prop-types";

function RoleView({ data }) {
  return (
    <Fragment>
      {data.map((role, i) => (
        <span key={i} className="margin-five-right">
          <span className="text-weight-medium">{role}</span>
          {i < data.length - 1 ? <span>,</span> : ""}
        </span>
      ))}
    </Fragment>
  );
}

export default RoleView;

RoleView.propTypes = {
  data: PropTypes.array.isRequired
};
