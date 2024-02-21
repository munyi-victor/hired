import React from 'react';

import appstore from "../images/appstore.png";
import googleplay from "../images/google-play.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="for-clients">
        <h5>For Clients</h5>
        <div>
          <ul>
            <li>
              <a href="/">Find talent</a>
            </li>
            <li>
              <a href="/">Hire talent</a>
            </li>
            <li>
              <a href="/">Enquire</a>
            </li>
            <li>
              <a href="/">Send reviews</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="freelancers">
        <h5>For freelancers</h5>
        <div>
          <ul>
            <li>
              <a href="/">View profile</a>
            </li>
            <li>
              <a href="/">Find tasks</a>
            </li>
            <li>
              <a href="/">View available tasks</a>
            </li>
            <li>
              <a href="/">Connect with clients</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="quick-links">
        <h5>Quick Links</h5>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/">Sign out</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="app">
        <h5>Get our app now</h5>
        <div className="app-img">
          <img
            src={googleplay}
            alt="Google play store logo"
            title="Play store"
          />
          <img
            src={appstore}
            alt="Apple app store logo"
            title="app store"
            style={{
              backgroundColor: "#fff",
              width: 224,
              borderRadius: 14,
              marginLeft: 14,
            }}
          />
        </div>
      </div>

      <div className="copyright text-center position-absolute bottom-0">
        <p className=" fs-6" style={{ color: "#888" }}>
          Copyright © 2024 - Hired Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;