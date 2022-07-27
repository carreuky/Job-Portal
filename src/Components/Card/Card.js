import React from 'react'

export default function Card() {
  return (
    <div>
         <div class="col-md-3">
        <div class="card p-2">
            <div class="text-right"> <small>Full Time</small> </div>
            <div class="text-center mt-2 p-3"> <img src="https://img.icons8.com/color/96/000000/google-logo.png" width="60" alt='pic'/> <span class="d-block font-weight-bold"></span>
                <hr/> <span>Google Inc</span>
                <div class="d-flex flex-row align-items-center justify-content-center"> <i class="fa fa-map-marker"></i> <small class="ml-1">FA 100, OH, USA</small> </div>
                <div class="d-flex justify-content-between mt-3"> <span>$34,000</span> <button class="btn btn-sm btn-outline-dark">Apply Now</button> </div>
            </div>
        </div>
    </div>
    </div>
  )
}
