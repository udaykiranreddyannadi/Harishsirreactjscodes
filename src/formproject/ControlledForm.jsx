import React, { useState } from 'react';
import './App.css';

function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    email: '',
    gender: 'Male',
    position: '',
    languages: {
      java: false,
      javascript: false,
      python: false,
    },
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        languages: {
          ...formData.languages,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      age: '',
      email: '',
      gender: 'Male',
      position: '',
      languages: {
        java: false,
        javascript: false,
        python: false,
      },
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Date of birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        Email Address:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Positions Available:
        <input type="radio" name="position" value="Junior Developer" checked={formData.position === 'Junior Developer'} onChange={handleChange} /> Junior Developer
        <input type="radio" name="position" value="Mid-level Developer" checked={formData.position === 'Mid-level Developer'} onChange={handleChange} /> Mid-level Developer
        <input type="radio" name="position" value="Senior Developer" checked={formData.position === 'Senior Developer'} onChange={handleChange} /> Senior Developer
      </label>
      <label>
        Programming Languages:
        <input type="checkbox" name="java" checked={formData.languages.java} onChange={handleChange} /> Java
        <input type="checkbox" name="javascript" checked={formData.languages.javascript} onChange={handleChange} /> JavaScript
        <input type="checkbox" name="python" checked={formData.languages.python} onChange={handleChange} /> Python
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default ControlledForm;
