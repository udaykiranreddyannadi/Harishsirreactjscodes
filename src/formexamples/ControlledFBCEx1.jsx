import React, { useState } from "react";
import Styles from "./uncontrolledex.module.css";
const ControlledFBCEx1 =()=>{
    const[name , setName]=useState("");
    const[email , setEmail]=useState("");
    const[password , setPassword]=useState("");
    const[phone , setPhone]=useState("");
    const[gender , setGender]=useState("");
    const[lang , setLang]=useState([]);

 //  console.log(lang);
 
    let handleSubmit=e=>{
        e.preventDefault();
      
        console.log({name , email , password , phone,gender ,lang});
        setName("")
    }
    let selectGender=e=>{
        // console.log(e.target.value);
        setGender(e.target.value);
    }
    let selectLanguage=e=>{
        // console.log(e.target.value);
        let value =e.target.value;
        if(e.target.checked){
            setLang([...lang , value])
        }
    }
  
    return(
<div>
<div id={Styles.formBlock}>
        <form onSubmit={handleSubmit}>
            <div className={Styles.field}>
                <input type="text" placeholder='enter user name'
               name="name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className={Styles.field}>
                <input type="email" placeholder='enter user email'
                    name="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
            </div>
            <div className={Styles.field}>
                <input type="password" placeholder='enter user password'
                name="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
            </div>
            <div className={Styles.field}>
                <input type="tel" placeholder='enter phone number'
               name="phone"
               value={phone}
               onChange={e=>setPhone(e.target.value)}
                />
            </div>
            <div className={Styles.field}>
                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" 
                value="male" 
                checked={gender === 'male'}
                onChange={selectGender}/><span>Male</span>
                <input type="radio" name="gender" 
                value="female" 
                checked={gender === 'female'}
                onChange={selectGender}/><span>Female</span>
                <input type="radio" name="gender" 
                value="others" 
                checked={gender === 'others'}
                onChange={selectGender}/><span>Others</span>

            </div>
            <div className={Styles.field}>
                <label htmlFor="">Langauges</label>
                <input type="checkbox" name="lang" 
                value="HTML"
               checked={lang.includes('HTML')}
                onChange={selectLanguage}
                /><span>HTML</span>
                <input type="checkbox" name="lang" 
                value="CSS"
                checked={lang.includes('CSS')}
                onChange={selectLanguage}
                /><span>CSS</span>
                <input type="checkbox" name="lang" 
                value="JS"
                checked={lang.includes('JS')}
                onChange={selectLanguage}
                /><span>JS</span>

            </div>
            <div className={Styles.field}>
                <input type="submit" value="Sign Up"/>
            </div>
        </form>
        
       
      </div>

      
</div>
    )
}

export default ControlledFBCEx1;