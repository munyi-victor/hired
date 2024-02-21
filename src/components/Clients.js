import React from 'react';

import google from "../images/google.png";
import amazon from "../images/amazon.png";
import meta from "../images/meta.png";
import hooli from "../images/hooli.png";

const Clients = () => {
  return (
    <div className="clients">
      <div className="c-title">
        <h2>We are trusted by many big companies</h2>
      </div>
      <div className="d-flex gap-5 companies">
        <div>
          <span>Google</span>
          <img src={google} alt="google logo" />
        </div>
        <div className='amazon'>
          <span>Amazon</span>
          <img src={amazon} alt="amazon logo" style={{height: "100px", marginTop:"20px"}} />
        </div>
        <div>
          <span>Meta</span>
          <img src={meta} alt="meta logo" />
        </div>
        <div>
          <span>Hooli</span>
          <img src={hooli} alt="hooli logo" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
