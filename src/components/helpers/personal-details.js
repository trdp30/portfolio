import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../../store/actions/user.action";
import PropTypes from "prop-types";

function PersonalDetails(props) {
  const { createUser } = props;
  const [personalDetails, setPersonalDetails] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    address: "",
    linkdin_link: "",
    github_link: ""
  });

  const update = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value
    });
  };

  const save = () => {
    createUser(personalDetails);
  };

  return (
    <Fragment>
      <div className="ui segment">
        <div className="ui form">
          <div className="three fields">
            <div className="field">
              <label className="text-weight-medium">First name</label>
              <input type="text" placeholder="First Name" name="first_name" onChange={update} />
            </div>
            <div className="field">
              <label className="text-weight-medium">Middle name</label>
              <input type="text" placeholder="Middle Name" name="middle_name" onChange={update} />
            </div>
            <div className="field">
              <label className="text-weight-medium">Last name</label>
              <input type="text" placeholder="Last Name" name="last_name" onChange={update} />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label className="text-weight-medium">E-mail</label>
              <input type="email" placeholder="joe@schmoe.com" name="email" onChange={update} />
            </div>
            <div className="field">
              <label className="text-weight-medium">Address</label>
              <input type="text" name="address" placeholder="Address" onChange={update} />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label className="text-weight-medium">Linkdin Profile Link</label>
              <input
                type="text"
                placeholder="user-name-12345678"
                name="linkdin_link"
                onChange={update}
              />
            </div>
            <div className="field">
              <label className="text-weight-medium">Github Profile Link</label>
              <input
                type="text"
                placeholder="username@github"
                name="github_link"
                onChange={update}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment padding-no-vertical border-none box-shadow-none">
        <div className="ui centered stackable grid margin-no">
          <div className="three wide column ui button positive text-center" onClick={save}>
            Save
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (payload) => dispatch(postUser(payload))
});

export default connect(null, mapDispatchToProps)(PersonalDetails);

PersonalDetails.propTypes = {
  createUser: PropTypes.func
};
