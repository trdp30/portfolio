import React from "react";
import { Icon } from "semantic-ui-react";

function Home() {
  return (
    <div className="ui container">
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui grid margin-no">
            <div className="middle aligned column">
              <p className="text-weight-medium text-size-large">Hi, I`m Trideep</p>
              <p className="">React | React Native | Ember Js Developer</p>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
