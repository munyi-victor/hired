import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav>
        <div className="logo">
          <Link to={"/home"}>
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <Link to={"#"} className="nav-button">
            Post a Job
          </Link>
          <Link to={"#"} className="nav-button">
            Find Jobs
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Dashboard;