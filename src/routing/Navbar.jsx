import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <section id="navBlock">
        <article>
            <div className="logoBlock">
                <img src="https://edisonlms-fs.s3.amazonaws.com/tenant_onlinelearning/iidt_logo_137.png" alt="" />
            </div>
            <div className="menuLinks">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/classrooms">Classrooms</Link></li>
                    <li><Link to="/assessment">Assessments</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/calender">Calender</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to='user/:userid'>Users</Link></li>
                </ul>
            </div>
        </article>
    </section>
  )
}

export default Navbar