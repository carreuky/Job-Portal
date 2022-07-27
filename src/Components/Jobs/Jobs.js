import React, { useState ,useEffect } from "react";
import "./Jobs.css";
import CreateJob from "../CreateJob/CreateJob";
import JobList from  "../JobList/JobList";



export default function Jobs() {
  //dispalying either jobform or jobs
const [disp ,SetDisp]=useState(false)
const [jobs, setJobs] = useState([]);
// console.log(jobs)

function handleDisplay(){
SetDisp(!disp)

}

function handleNew(newjob){
  console.log(newjob)
  setJobs([...jobs, newjob])
}
function deleteJob(id) {
  const updatedJob = jobs.filter(job => job.id !== id)
  setJobs(updatedJob)
}
useEffect(() => {
  fetch("https://jbap.herokuapp.com/jobs")
    .then((r) => r.json())
    .then((data) => {
    // console.log(data)
    setJobs(data)});
}, []);

  const Search = (
    <div className="container m-3 ">
    <div className="d-flex justify-content-center text-center  ">
    <div className="">
            <form  className="form ">
                <div className="d-inline">
                <button onClick={handleDisplay} type="button" className="btn btn-primary">{disp?'View Jobs':'Create Job'}</button>

                <input type="text" className="input-lg inpuS py-3" placeholder="Search" />
                    <button type="submit" className="btnsearch "><i className="icon-search"></i></button>
                </div>
            </form>
        </div>
    </div>
  </div>

  );

  return (
    <div className="Jobs p-2">
      <h1 className="text-center  sea">Search Jobs in Kenya</h1>
      <div className="text-center">
        <button type="button" className="btn btn-primary btn-sm mx-2">
          Jobs in Nairobi
        </button>
        <button type="button" className="btn btn-primary btn-sm mx-2">
          Jobs in Africa
        </button>
        <button type="button" className="btn btn-primary btn-sm mx-2">
          Jobs Abroad
        </button>
      </div>
      {Search}
      {disp ? <CreateJob handleNew={handleNew} handleDisplay={handleDisplay}/>:<JobList jobs={jobs} handleDelete={deleteJob}/>}
    </div>
  );
}
