import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//import './global.css'; // Corrected import statement

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, phone };
    axios.post("http://localhost:8000/users", payload)
      .then(res => {
        toast.success("User created successfully");
        navigate("/");
      })
      .catch(err => toast.error("User not created"));
  }

  return (
    <div className='form-container'>
      <h1 className='form-header text-center text-primary'>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="colFormLabelName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="colFormLabelName" placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="colFormLabelEmail" placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelPhone" className="col-sm-2 col-form-label">Phone No</label>
          <div className="col-sm-10">
            <input type="tel" className="form-control" id="colFormLabelPhone" placeholder="Enter phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
         
          <div className="col-sm-10 position-relative">
            <input type="submit" className="form-control btn-submit" value="Create User" />
          </div>

          <div className="col-sm-10 position-relative">
           <Link  to="/" className='btn btn-primary w-100'>Back To Home</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Create;
