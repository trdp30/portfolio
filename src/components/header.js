import React from "react";
import { Icon } from "semantic-ui-react";

function Header() {
  return (
    <div className="ui stackable grid margin-no">
      <div className="middle aligned column padding-vs-vertical" style={{ width: 104 }}>
        <img className="ui medium circular image" src="/assets/images/profile-pic.jpeg" alt="" />
      </div>
      <div className="thirteen wide column padding-vs-vertical">
        <p className="text-size-large text-weight-medium margin-five-bottom">Trideep Kumar Das</p>
        <p className="margin-no">React | React Native | EmberJs Developer</p>
        <p className="margin-five-bottom">
          <span>
            <a
              href="mailto:trdp30@gmail.com"
              className="margin-ten-right text-color-red"
              target="black"
            >
              <Icon name="mail outline" />
              trdp30@gmail.com
            </a>
          </span>
          <span>
            <a href="tel:09706055724" className="margin-ten-right text-color-green" target="black">
              <Icon name="phone" />
              +91-9706055724
            </a>
          </span>
          <span>
            <Icon name="map marker alternate" />
            <span className="margin-ten-right">HSR Layout, Bangalore, 560068</span>
          </span>
        </p>
        <p>
          <span>
            <a href="https://www.linkedin.com/in/trideep-das-817962133/" target="blank">
              <Icon name="linkedin" />
              <span className="margin-ten-right">trideep-das-81796213</span>
            </a>
            <a href="https://github.com/trdp30" target="blank">
              <Icon name="github" />
              <span className="margin-ten-right">trdp30</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Header;
