import React, { useState, Fragment } from "react";
import { Icon } from "semantic-ui-react";
import ModalView from "./modules/modal-view";

function Email() {
  const [email, setEmail] = useState("trdp30@gmail.com");
  const [isEdit, toggleEdit] = useState(false);

  return (
    <Fragment>
      <div className="ui button" onClick={() => toggleEdit(true)}></div>
      <span>
        <a
          href={`mailto:${email}`}
          className="margin-ten-right text-color-red disableOnPrint"
          target="black"
        >
          <Icon name="mail outline" />
          {email}
        </a>
      </span>
      <ModalView toggleModal={toggleEdit} open={isEdit} />
    </Fragment>
  );
}

export default Email;
