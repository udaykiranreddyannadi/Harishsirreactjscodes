import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { userid } = useParams();
    const navigate = useNavigate();

    //! Fetch and populate the data
    useEffect(() => {
        axios.get(`http://localhost:8000/users/${userid}`,userid)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
                setPhone(res.data.phone);
            })
            .catch(err => console.log(err));
    }, [userid]);

    //! Updating the data
    let handleSubmit = e => {
        e.preventDefault();
        const updatedUser = { name, email, phone };

        axios.put(`http://localhost:8000/users/${userid}`, updatedUser)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='form-container m-5 w-40'>
            <h1 className='form-header text-center text-primary'>Update User</h1>
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
                        <input type="submit" className="form-control btn-submit" value="Update User" />
                    </div>
                    <div className="col-sm-10 position-relative">
                        <Link to="/" className='btn btn-primary w-100'>Back To Home</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;
