import React, { Fragment } from "react";
import PropTypes from "prop-types";

function KeywordView({ data }) {
  return (
    <Fragment>
      {data.map((keyword, i) => (
        <span key={i} className="margin-five-right">
          <span className="text-weight-medium">{keyword}</span>
          {i < data.length - 1 ? <span>,</span> : ""}
        </span>
      ))}
    </Fragment>
  );
}

export default KeywordView;

KeywordView.propTypes = {
  data: PropTypes.array.isRequired
};
