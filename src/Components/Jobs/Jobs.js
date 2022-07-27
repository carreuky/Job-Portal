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
useEffect(() => {
  fetch("https://jbap.herokuapp.com/jobs")
    .then((r) => r.json())
    .then((data) => {
    console.log(data)
    setJobs(data)});
}, []);

  const Search = (
    <div class="container m-3 ">
    <div class="d-flex justify-content-center text-center  ">
    <div class="">
            <form  class="form ">
                <div class="d-inline">
                <button onClick={handleDisplay} type="button" class="btn btn-primary">{disp?'View Jobs':'Create Job'}</button>

                <input type="text" class="input-lg inpuS py-3" placeholder="Search" />
                    <button type="submit" class="btnsearch "><i class="icon-search"></i></button>
                </div>
            </form>
        </div>
    </div>
  </div>

  );

  return (
    <div className="Jobs p-2">
      <h1 class="text-center  sea">Search Jobs in Kenya</h1>
      <div className="text-center">
        <button type="button" class="btn btn-primary btn-sm mx-2">
          Jobs in Nairobi
        </button>
        <button type="button" class="btn btn-primary btn-sm mx-2">
          Jobs in Africa
        </button>
        <button type="button" class="btn btn-primary btn-sm mx-2">
          Jobs Abroad
        </button>
      </div>
      {Search}
      {disp ? <CreateJob handleNew={handleNew} handleDisplay={handleDisplay}/>:<JobList jobs={jobs} />}
    </div>
  );
}
