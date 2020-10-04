import React from "react";
import PropTypes from "prop-types";

function ExperienceDetails(props) {
  const { data } = props;
  return (
    <div className="ui segment box-shadow-none">
      <div className="ui grid margin">
        <div className="column content-logo-width">
          <img width="24" src={data.image_url} loading="lazy" height="24" alt="" />
        </div>
        <div className="fourteen wide column">
          <p className="margin-no margin-five-bottom text-weight-medium text-size-normal">
            {data.role}
          </p>
          <p className="text-color-black margin-no margin-five-bottom">{data.org}</p>
          <p className="text-color-black margin-no margin-five-bottom text-size-small">
            {data.duration}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;

ExperienceDetails.propTypes = {
  data: PropTypes.object.isRequired
};
