import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Jobs } from './Jobs';

import Logo from "../images/hiredlogo.png";

// style
import { DatashboardStyles } from "../styles/App.styles";

const Dashboard = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = () => {
      setJobs([...Jobs]);
    }
    getJobs();
  }, [])
  
  const handleClick = (jobId) => {
    navigate(`/dashboard/${jobId}`);
  }

  return (
    <DatashboardStyles>
      <div className="dashboard-container">
        <nav>
          <div className="logo">
            <a href={"/dashboard"}>
              <img src={Logo} alt="hired logo" height="50px" />
              {/* <h1>Hired!</h1> */}
            </a>
          </div>

          <div className="dash-links">
            <Link to={"/dashboard/post-job"} className="nav-button">
              Post a Job
            </Link>
            <Link to={"/dashboard/find-jobs"} className="nav-button">
              Find Jobs
            </Link>
          </div>

          <div>
            <Link
              to={"/dashboard/profile"}
              className="profile-view"
              title="profile"
            >
              <span className="profile-image">M</span>
            </Link>
          </div>
        </nav>

        <section className="available-jobs-section">
          {jobs.map((job) => (
            <div className="available-jobs" key={job.id}>
              <h5>{job.title}</h5>
              <hr style={{ marginTop: "-3px" }} />
              <h5>Description:</h5>
              <p>{job.description}</p>

              <button
                className="nav-button"
                onClick={() => handleClick(job.id)}
              >
                View Job Details
              </button>
            </div>
          ))}
        </section>
      </div>
    </DatashboardStyles>
  );
}

export default Dashboard;