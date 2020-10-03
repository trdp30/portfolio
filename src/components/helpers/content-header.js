import React from "react";
import PropTypes from "prop-types";

function ContentHeader({ title }) {
  return (
    <div className="ui segment">
      <p className="text-weight-medium text-size-large">{title}</p>
    </div>
  );
}

export default ContentHeader;

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
};
