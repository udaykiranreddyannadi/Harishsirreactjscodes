import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ClassRooms = () => {
  return (
    <div>ClassRooms
      {/* inside the calssroom page giving routing is called nested routing */}
      <hr />
      <ul>
        {/* here the below path should be open id in classroom page */}
        <li><Link to="fsd1">FSD-batch1</Link></li>
        <li><Link to="fsd2">FSD-batch2</Link></li>
      </ul>
      <Outlet/>  
      {/* Outlet is used to displayed the child routs */}
    </div>
  )
}

export default ClassRooms