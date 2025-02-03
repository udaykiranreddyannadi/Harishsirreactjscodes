import React, { useRef } from 'react'
import Styles from "./uncontrolledex.module.css"
const UnControlledFBCEx = () => {

    let nameRef= useRef();
    let mailRef= useRef();
    let passRef= useRef();
    let PhoneRef= useRef();

    let handleSubmit=e=>{
        e.preventDefault();
        let name = nameRef.current.value;
        let email = mailRef.current.value;
        let psw = passRef.current.value;
        let phone = PhoneRef.current.value;

        console.log({name , email , psw , phone});
    }
  return (
    <div id={Styles.formBlock}>
    <form onSubmit={handleSubmit}>
        <div className={Styles.field}>
            <input type="text" placeholder='enter user name' ref={nameRef} />
        </div>
        <div className={Styles.field}>
            <input type="email" placeholder='enter user email' ref={mailRef}/>
        </div>
        <div className={Styles.field}>
            <input type="password" placeholder='enter user password' ref={passRef}/>
        </div>
        <div className={Styles.field}>
            <input type="tel" placeholder='enter phone number' ref={PhoneRef}/>
        </div>
        <div className={Styles.field}>
            <input type="submit" value="Sign Up"/>
        </div>
    </form>
  </div>
  )
}

export default UnControlledFBCEx