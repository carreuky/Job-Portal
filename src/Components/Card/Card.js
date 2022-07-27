import React from 'react'
import "./Card.css";


export default function Card({url,jobname,logo,company,location,salary}) {
    // console.log(salary)


  return (
         <div class="col-md-4 m-2 ">
        <div class="Card card p-2">
            <div class="text-right"> <small>Full Time</small> </div>
            <div class="text-center mt-3 p-3
            "> <img src={logo} width="60" alt='Logo'/> <span class="d-block font-weight-bold">{jobname}</span>
                <hr/> <span>{company}</span>
                <div class="d-flex flex-row align-items-center justify-content-center"> <i class="fa fa-map-marker"></i><small class="ml-1 px-2"> {location}</small> </div>
                <div class="d-flex justify-content-between mt-3"> <span className='text-dark'>${salary}</span>
                <a href={url} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Apply Now</a>
 
                {/* <button class="btn btn-primary">Apply Now</button> */}
                 </div>
            </div>
        </div>
    </div>
  )
}
