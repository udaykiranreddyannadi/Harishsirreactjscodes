import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    let navigate = useNavigate();

    let handleSubmit=e=>{
        e.preventDefault();
        // console.log(name , email , phone);
        let payload ={name , email , phone};
        axios.post("http://localhost:8000/users",payload)
        .then(res=>{
            toast.success("User created successfully");
            navigate("/")
        })
        .catch(err=>toast.error("user not created"))
    }
  return (
    <div className='container m-5 w-40'>
    
 <h1 className='text-center text-primary mb-5'>Create User</h1>
 <form onSubmit={handleSubmit}>
 <div className="row mb-3">
    <label for="colFormLabel" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="name" className="form-control" id="colFormLabel" placeholder="enter name"
      value={name}
      onChange={e=>setName(e.target.value)}
      />
    </div>
  </div>
  <div className="row mb-3">
    <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="enail" className="form-control" id="colFormLabel" placeholder="enter email"
      value={email}
      onChange={e=>setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row mb-3">
    <label for="colFormLabel" className="col-sm-2 col-form-label">Phone No</label>
    <div className="col-sm-10">
      <input type="tel" className="form-control" id="colFormLabel" placeholder="enter phone "
      value={phone}
      onChange={e=>setPhone(e.target.value)}
      />
    </div>
  </div>
  <div className="row">
   
    <div className="col-sm-10 position-relative">
      <input type="submit" className="form-control" id="colFormLabel" value="Create User"/>
    </div>
  </div>
 </form>
  
    </div>
  )
}

export default Create