//!for dynamic routing (to fetch one data from multiple data)
import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const data = useParams();
    // useParams is used to capture the data
    console.log(data);
  return (
    <div>Users - {data.userid}</div>
  )
}

export default Users