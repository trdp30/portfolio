import React, { Fragment } from "react";

function SkillDetails() {
  const update = (e) => {
    console.log(e);
  };
  const save = (e) => {
    console.log(e);
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

export default SkillDetails;
