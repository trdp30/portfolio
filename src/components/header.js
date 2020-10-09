import React from "react";
import { Icon } from "semantic-ui-react";
import Email from "./helpers/email";
import PropTypes from "prop-types";

function Header({ isCreateView = false }) {
  return (
    <div className="ui stackable grid margin-no">
      <div className="middle aligned column padding-vs-vertical" style={{ width: 104 }}>
        <img className="ui medium circular image" src="/assets/images/profile-pic.jpeg" alt="" />
      </div>
      <div className="thirteen wide column padding-vs-vertical">
        <p className="text-size-large text-weight-medium margin-five-bottom">Trideep Kumar Das</p>
        <p className="margin-no">React | React Native | EmberJs Developer</p>
        <p className="margin-five-bottom">
          <Email isCreateView={isCreateView} />
          <span>
            <a
              href="tel:09706055724"
              className="margin-ten-right text-color-green disableOnPrint"
              target="black"
            >
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

Header.propTypes = {
  isCreateView: PropTypes.bool
};
