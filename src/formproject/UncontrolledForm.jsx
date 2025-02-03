import React, { useRef } from 'react';
import './App.css';

function UncontrolledForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const juniorRef = useRef(null);
  const midRef = useRef(null);
  const seniorRef = useRef(null);
  const javaRef = useRef(null);
  const javascriptRef = useRef(null);
  const pythonRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dob: dobRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      position: juniorRef.current.checked
        ? 'Junior Developer'
        : midRef.current.checked
        ? 'Mid-level Developer'
        : seniorRef.current.checked
        ? 'Senior Developer'
        : '',
      languages: {
        java: javaRef.current.checked,
        javascript: javascriptRef.current.checked,
        python: pythonRef.current.checked,
      },
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    console.log(formData);
  };

  const handleReset = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    dobRef.current.value = '';
    ageRef.current.value = '';
    emailRef.current.value = '';
    genderRef.current.value = 'Male';
    juniorRef.current.checked = false;
    midRef.current.checked = false;
    seniorRef.current.checked = false;
    javaRef.current.checked = false;
    javascriptRef.current.checked = false;
    pythonRef.current.checked = false;
    passwordRef.current.value = '';
    confirmPasswordRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" ref={firstNameRef} />
      </label>
      <label>
        Last Name:
        <input type="text" ref={lastNameRef} />
      </label>
      <label>
        Date of birth:
        <input type="date" ref={dobRef} />
      </label>
      <label>
        Age:
        <input type="number" ref={ageRef} />
      </label>
      <label>
        Email Address:
        <input type="email" ref={emailRef} />
      </label>
      <label>
        Gender:
        <select ref={genderRef} defaultValue="Male">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Positions Available:
        <input type="radio" name="position" value="Junior Developer" ref={juniorRef} /> Junior Developer
        <input type="radio" name="position" value="Mid-level Developer" ref={midRef} /> Mid-level Developer
        <input type="radio" name="position" value="Senior Developer" ref={seniorRef} /> Senior Developer
      </label>
      <label>
        Programming Languages:
        <input type="checkbox" name="java" ref={javaRef} /> Java
        <input type="checkbox" name="javascript" ref={javascriptRef} /> JavaScript
        <input type="checkbox" name="python" ref={pythonRef} /> Python
      </label>
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <label>
        Confirm Password:
        <input type="password" ref={confirmPasswordRef} />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default UncontrolledForm;
