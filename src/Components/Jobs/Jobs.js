import React from "react";
import "./Jobs.css";
import CreateJob from "../CreateJob/CreateJob";

export default function Jobs() {
  const Search = (
    <div class="container m-3 ">
    <div class="d-flex justify-content-center px-2 ">
    <div class="form-group">
    <input class="form-control text-white input-lg" id="inputlg"  placeholder="Search Job..."/>
  </div>
    </div>
  </div>

  );

  return (
    <div className="Jobs p-2">
      <h1 class="text-center bg-primary sea">Search Jobs in Kenya</h1>
      <div className="text-center">
        <button type="button" class="btn btn-primary btn-sm mx-2">
          Jobs in Kenya
        </button>
        <button type="button" class="btn btn-primary btn-sm mx-2">
          Jobs in Africa
        </button>
        <button type="button" class="btn btn-primary btn-sm mx-2">
          Jobs Abroad
        </button>
      </div>
      {Search}
      <CreateJob/>
    </div>
  );
}
