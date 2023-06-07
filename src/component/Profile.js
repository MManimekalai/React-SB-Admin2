import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'

function Profile() {
  let Navigate= useNavigate()
  return   <> 
  <div>
      <h1>Profile</h1>
      <ul>
       <Link to="details"><li></li>Profile Details</Link> 
        <li onClick={()=> Navigate("reset")}>Reset Password</li>
      </ul>
      <Outlet/>
    </div>
    </> 
}

export default Profile
