import React from "react";
import PropTypes from "prop-types";

function ExperienceDetails(props) {
  const { data } = props;
  return (
    <div className="ui segment">
      <div className="ui grid margin">
        <div className="one wide column">
          <img width="24" src={data.image_url} loading="lazy" height="24" alt="" />
        </div>
        <div className="fifteen wide column">
          <p className="margin-no margin-five-bottom text-weight-bold text-size-normal">
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
  // data: {
  //   image_url: PropTypes.string.isRequired,
  //   role: PropTypes.string.isRequired,
  //   org: PropTypes.string.isRequired,
  //   joined_date: PropTypes.string,
  //   duration: PropTypes.string
  // }
};
