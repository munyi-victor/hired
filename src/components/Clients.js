import React from 'react'

const Clients = () => {
  return (
    <div className="clients bg-light">
      <div className='c-title'>
        <h4>We are trusted by many big companies</h4>
      </div>
      <div className='d-flex gap-5 companies'>
        <div>
          <span>Google</span>
        </div>
        <div>
          <span>Amazon</span>
        </div>
        <div>
          <span>Meta</span>
        </div>
        <div>
          <span>Netflix</span>
        </div>
      </div>
    </div>
  );
}

export default Clients;
