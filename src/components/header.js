import React from "react";
import { Icon } from "semantic-ui-react";

function Header() {
  return (
    <div className="ui stackable grid margin-no">
      <div className="middle aligned column padding-vs-vertical" style={{ width: 130 }}>
        <img className="ui medium circular image" src="/assets/images/profile-pic.jpeg" alt="" />
      </div>
      <div className="eight wide column padding-vs-vertical">
        <p className="text-size-large text-weight-medium margin-no">Trideep Kumar Das</p>
        <p className="margin-five-bottom">
          Maybe I don`t know your question`s answer, but I have the capability to find out the right
          answer.
        </p>
        <p>
          Quote: If you think you are good, then you have to be crazy about your stuff and people
          should call you a psycho. Else you are not what you are thinking of.{" "}
        </p>
      </div>
      <div className="five wide column text-right padding-vs-vertical">
        <p className="margin-five-bottom">
          <span className="margin-ten-right">trdp30@gmail.com</span>
          <Icon name="mail outline" />
        </p>
        <p className="margin-five-bottom">
          <span className="margin-ten-right">+91-9706055724</span>
          <Icon name="phone" />
        </p>
        <p className="margin-five-bottom">
          <span className="margin-ten-right">HSR Layout, Bangalore, 560068</span>
          <Icon name="map marker alternate" />
        </p>
        <p className="margin-five-bottom">
          <a href="https://www.linkedin.com/in/trideep-das-817962133/" target="blank">
            <span className="margin-ten-right">trideep-das-81796213</span>
            <Icon name="linkedin" />
          </a>
        </p>
        <p className="margin-five-bottom">
          <a href="https://github.com/trdp30" target="blank">
            <span className="margin-ten-right">trdp30</span>
            <Icon name="github" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
