import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Progress } from "semantic-ui-react";

function SkillCard(props) {
  const { data } = props;

  return (
    <Fragment>
      <div className="eight wide column text-right padding-vs">{data.name}</div>
      <div className="eight wide middle aligned column padding-vs">
        <Progress percent={data.value} color="blue" className="margin-no" />
      </div>
    </Fragment>
  );
}

export default SkillCard;

SkillCard.propTypes = {
  data: PropTypes.object.isRequired
};
