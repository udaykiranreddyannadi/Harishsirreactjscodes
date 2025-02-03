import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const data = useParams();
    console.log(data);
  return (
    <div>Users - {data.userid}</div>
  )
}

export default Users