import React from "react";
import { useParams, Link } from "react-router-dom";
import { Jobs } from "./Jobs";

const JobDetails = () => {
  const jobId = useParams();

  const job = Jobs.find((job) => job.id === parseInt(jobId.id));

  return (
    <div className="container">
      <h3>More Job Details</h3>

      {job ? (
        <div className="mt-4 card card-body">
          <h5>{job.title}</h5>
          <hr/>
          <h5>Description:</h5>
          <p>{job.description}</p>
          <h5>Requirements:</h5>
          <p>{job.moreInfo}</p>

          <div>
            <Link to="/dashboard/apply" className="btn btn-primary">
              Apply now
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2>Job details not found</h2>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
