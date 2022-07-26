import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
      <div className='Text'>
        <h1>JOB SEEKERS</h1>
        <h2>WHERE HUSTLE IS REDUCED...</h2>
        <p style={{ fontWeight: 'lighter', padding: '20px' }}>JOB SEEKERS IS A LEADING JOB SITE. ARE YOU LOOKING FOR YOUR NEXT JOB? REGISTER TODAY FOR FREE JOB ALERTS. LOOKING TO HIRE THE BEST? ITS FREE. POST YOUR VACANCY & REACH OVER 500,000 PROFESSIONALS.</p>
        <h3>Explore and discover
          the right job for you!</h3>


        <button class="btn btn-primary btn-lg "> <NavLink className="nav-link " to='/jobs'>
          Discover
        </NavLink></button>

      </div>
      <div class="fixed-bottom text-center">
        <div class="container">
          <p class="navbar-text">© 2022</p>
        </div>
      </div>

    </div>
  )
}
export default Home