import React from 'react';
import { Jobs } from './Jobs';

const JobDetails = ({match}) => {
  const jobId = match.params.id;
  const job = Jobs.find((p) => p.id.toString() === jobId);
  
  return (
    <div>
      <h3>Job More Details</h3>

      {job ? (
        <div>
          <h1>Hello</h1>
          <h5>{job.title}</h5>
          <h5>Description:</h5>
          <p>{job.description}</p>
          <h5>Requirements:</h5>
          <p>{job.moreInfo}</p>
        </div>
      ) : (
        <div>
          <h2>Job details not found</h2>
        </div>
      )}
    </div>
  );
}

export default JobDetails