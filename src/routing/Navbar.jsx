import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navBlock">
        <article>
            <div className="logoBlock">
                <img src="https://edisonlms-fs.s3.amazonaws.com/tenant_onlinelearning/iidt_logo_137.png" alt="IIDT Logo" />
            </div>
            <div className="menuLinks">
                <ul>
                    {/* when ever we are change the page here the page will relode due to anchore tag, to recover it we need to use "link" ()instead of anchore this link will accept to as prope  and the link is given by react router dom */}
                    {/* <li><a href="/">Dashboard</a></li>
                    <li><a href="/classrooms">Classrooms</a></li>
                    <li><a href="/assessments">Assessments</a></li>
                    <li><a href="/store">Store</a></li>
                    <li><a href="calender">Calender</a></li>
                    <li><a href="news">News</a></li>
                    <li><a href="blog">Blog</a></li> */}


                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/classrooms">Classrooms</Link></li>
                    <li><Link to="/assessments">Assessments</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/calender">Calender</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/users">Users</Link></li>

                </ul>
            </div>
        </article>
    </section>
  );
}

export default Navbar;





{/* when ever we are change the page here the page will relode due to anchore tag, to recover it we need to use "link" ()instead of anchore this link will accept to as prope  and the link is given by react router dom */}
                    {/* <li><a href="/">Dashboard</a></li>
                    <li><a href="/classrooms">Classrooms</a></li>
                    <li><a href="/assessments">Assessments</a></li>
                    <li><a href="/store">Store</a></li>
                    <li><a href="calender">Calender</a></li>
                    <li><a href="news">News</a></li>
                    <li><a href="blog">Blog</a></li> */}