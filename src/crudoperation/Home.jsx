import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [users, setUsers] = useState([]);
   //  console.log(users);

    useEffect(() => {
        axios.get("http://localhost:8000/users") //here axios will return promise
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container bg-body-secondary'>
            <h1 className='text-center p-5 text-info'>List Of Users</h1>
            <div>
                <Link to='/create' className='btn btn-success text-white mb-2'>Create User</Link>
                {/* above code is used for create bootstrap */}
            </div>
            {
                users && users.length > 0 ? (
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <Link to={`/update/${user.id}`} className='btn btn-success me-2'>Edit</Link>
                                                <button className='btn btn-danger me-2'>Delete</button>
                                                <Link to={`/view/${user.id}`} className='btn btn-info me-2'>View Details</Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                ) : <h1 className='text-center text-danger'>No Data Available</h1>
            }
        </div>
    );
};

export default Home;
