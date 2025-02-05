import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [user, setUser] = useState({});
  const { userid } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${userid}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [userid]);

  return (
    <div className='container d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
      <div className="card w-50" style={{height:"250px"}}>
  <div className="card-body">
    <h5 className="card-title">User Details</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">Name:{user.name}</p>
    <p className="card-text">Name:{user.email}</p>
    <p className="card-text">Name:{user.phone}</p>
    
    <Link to="/" className="card-link btn btn-primary">Back to home</Link>
    <Link to={`/update/${user.id}`} className="card-link btn btn-success">Update User</Link>
  </div>
</div>
      
    </div>
  );
}

export default Read;
