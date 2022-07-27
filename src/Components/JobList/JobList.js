import React from "react";
import Card from "../Card/Card";

export default function ({ jobs, handleDelete }) {


  
  // console.log(jobs)
  const job = jobs.map((job) => {
    return (
      <Card
        handleDelete={handleDelete}
        key={job.id}
        id={job.id}
        jobname={job.job_type}
        logo={job.image}
        company={job.company}
        location={job.location}
        salary={job.salary}
        url={job.url}
      />
    );
  });

  return (
    <div className="text-dark">
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h4 className="text-white">Recommended Jobs</h4>
        </div>
        <div className="row mt-4 g-1">{job}</div>
      </div>
    </div>
  );
}
