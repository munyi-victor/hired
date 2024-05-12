import React from "react";
import pic from "../images/sidepic.jpg";

// styles
import { WhyusStyles } from "../styles/App.styles";

const WhyUS = () => {
  return (
    <WhyusStyles>
      <section className="whyus">
        <h3>This is why big companies choose Hired.</h3>

        <div className="cols">
          <div className="left-col">
            <div className="reasons">
              <h4>
                <span>1</span>Productivity
              </h4>
              <p>
                <span></span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <div className="reasons">
              <h4>
                <span>2</span>Timeliness
              </h4>
              <p>
                <span></span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <div className="reasons">
              <h4>
                <span>3</span>Trustworthy
              </h4>
              <p>
                <span></span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="right-col">
            <img src={pic} alt="side pic" />
          </div>
        </div>
      </section>
    </WhyusStyles>
  );
}

export default WhyUS;