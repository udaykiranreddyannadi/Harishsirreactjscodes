 import React, { Component } from 'react'
 import Styles from "./uncontrolledex.module.css";
class UnControlledCBCEx extends Component {
    
    //uncontrollled way of targeting(collection) the data
    nameRef=React.createRef();
    mailRef=React.createRef();
    passRef=React.createRef();
    phoneRef=React.createRef();

     handleSubmit=e=>{
        e.preventDefault();
         //console.log(this.nameRef.current.value);
        let name =this.nameRef.current.value;
        let email =this.mailRef.current.value;
        let psw =this.passRef.current.value;
        let phone =this.phoneRef.current.value;
        console.log({name , email , psw , phone});

    }
  render() {
     //console.log(this.nameRef);
    return (
       <div id={Styles.formBlock}>
         <form onSubmit={this.handleSubmit}>
             <div className={Styles.field}>
                 <input type="text" placeholder='enter user name' ref={this.nameRef}/>
             </div>
             <div className={Styles.field}>
                 <input type="email" placeholder='enter user email' ref={this.mailRef}/>
             </div>
             <div className={Styles.field}>
                 <input type="password" placeholder='enter user password' ref={this.passRef}/>
             </div>
             <div className={Styles.field}>
             <input type="tel" placeholder='enter phone number' ref={this.phoneRef}/>
             </div>
             <div className={Styles.field}>
                 <input type="submit" value="Sign Up"/>
             </div>
         </form>
       </div>
    )
  }
}


export default UnControlledCBCEx;


