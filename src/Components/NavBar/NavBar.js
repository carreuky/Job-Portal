import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';




export default function NavBar() {
  return (
    <div className="Nav">
      <ul className="nav justify-content-center  ">
        <li className="nav-item active mr-4">
          <NavLink className="nav-link " to='/'>
             Home
      </NavLink>
        </li>
        <li className="">
        </li>
        <li className="nav-item mx-4">
          <NavLink className="nav-link "  to='/jobs'>
                Jobs
          </NavLink>
        </li>
        <li className="">
          <NavLink  className='nav-link mx-4' to='/contactus'>
             Reach Us
           </NavLink>
        </li>
        <li className="">
          <NavLink  className='nav-link mx-4' to='/signin'>
             Sign In/Log In
           </NavLink>
        </li>
      </ul>
    </div>
  )
}
