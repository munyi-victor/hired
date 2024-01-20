import React from 'react';
import sidepic from "../images/sidepic.jpg"

const Landing = () => {
  return (
    <div className="container-fluid">
      <div className="landing">
        <div className="landing-info">
          <h1>
            Make it happen <br /> today with Hired!
          </h1>
          <h5>We bring all your dreams into reality.</h5>

          <div className='landing-btn'>
            <a href='/'>Get Started</a>
          </div>
        </div>

        <div className='landing-pic'>
          <img src={sidepic} alt='hey'/>
        </div>
      </div>
    </div>
  );
}

export default Landing;