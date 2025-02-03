import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ClassRooms = () => {
  return (
    <div>ClassRooms

      <hr />
      <ul>
        <li><Link to="fsd1">FSD-batch1</Link></li>
        <li><Link to="fsd2">FSD-batch2</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default ClassRooms