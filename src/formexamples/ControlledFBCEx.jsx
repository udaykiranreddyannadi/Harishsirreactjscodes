import React, { useState } from "react";
import Styles from "./uncontrolledex.module.css";

const ControlledFBCEx = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });
    const [value, setValue] = useState({});

    let handleSubmit = (e) => {
        e.preventDefault();
        let { name, email, password, phone } = formData;

        let userDetails = {
            name, email, password, phone
        };

        localStorage.setItem("formData", JSON.stringify(userDetails));
        
        let data = localStorage.getItem("formData");
        let res = JSON.parse(data);
        setValue(res);
    };

    let handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    let clearStorage = () => {
        localStorage.clear();
        setFormData({
            name: "",
            email: "",
            password: "",
            phone: ""
        });
        setValue({});
    };

    return (
        <div>
            <div id={Styles.formBlock}>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.field}>
                        <input
                            type="text"
                            placeholder="Enter user name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={Styles.field}>
                        <input
                            type="email"
                            placeholder="Enter user email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={Styles.field}>
                        <input
                            type="password"
                            placeholder="Enter user password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={Styles.field}>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={Styles.field}>
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
                <button onClick={clearStorage}>Clear Storage</button>
            </div>
            <div>
                <h1>{value.name}</h1>
                <h2>{value.email}</h2>
                <h2>{value.password}</h2>
                <h2>{value.phone}</h2>
            </div>
        </div>
    );
};

export default ControlledFBCEx;
