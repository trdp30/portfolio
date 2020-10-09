import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

function Email() {
  const [email] = useState("trdp30@gmail.com");

  return (
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
  );
}

export default Email;
