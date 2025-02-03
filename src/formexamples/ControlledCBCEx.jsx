// import React, { Component } from 'react'
// import Styles from "./uncontrolledex.module.css"
// export default class ControlledCBCEx extends Component {
//     constructor(){
//         super();
//         this.state={
//             name:"",
//             email:"",
//             password:"",
//             phone:""
//         }
//     }
//     handleSubmit=e=>{
//         e.preventDefault();
//         let {name , email , password , phone} = this.state;
//         console.log({name , email , password , phone});
//     }

//     handleChange1=e=>{
//          //console.log(e);
//         this.setState({name:e.target.value})
//     }
//     handleChange2=e=>{
//         // console.log(e.target.value);
//         this.setState({email:e.target.value})
//     }
//     handleChange3=e=>{
//         // console.log(e.target.value);
//         this.setState({password:e.target.value})
//     }
//     handleChange4=e=>{
//         // console.log(e.target.value);
//         this.setState({phone:e.target.value})
//     }
//   render() {
//     // console.log(this.state);
//     return (
//         <div id={Styles.formBlock}>
//         <form onSubmit={this.handleSubmit}>
//             <div className={Styles.field}>
//                 <input type="text" placeholder='enter user name'
                
//                 value={this.state.name} //in this value attribute data stored sent to this.state
//                 onChange={this.handleChange1}
//                 />
//             </div>
//             <div className={Styles.field}>
//                 <input type="email" placeholder='enter user email'
                
//                 value={this.state.email}
//                 onChange={this.handleChange2}
//                 />
//             </div>
//             <div className={Styles.field}>
//                 <input type="password" placeholder='enter user password'
                
//                 value={this.state.password}
//                 onChange={this.handleChange3}
//                 />
//             </div>
//             <div className={Styles.field}>
//                 <input type="tel" placeholder='enter phone number'
                
//                 value={this.state.phone}
//                 onChange={this.handleChange4}
//                 />
//             </div>
//             <div className={Styles.field}>
//                 <input type="submit" value="Sign Up"/>
//             </div>
//         </form>
//       </div>
//     )
//   }
// }


//**************************************************************************************************************************
//!for each and everh input we use single function here we have consized form

import React, { Component } from 'react'
import Styles from "./uncontrolledex.module.css"
export default class ControlledCBCEx extends Component {
    constructor(){
        super();
        this.state={

            name:"",
            email:"",
            password:"",
            phone:""
        }
    }
    handleSubmit=e=>{
        e.preventDefault();
        let {name , email , password , phone} = this.state;
        console.log({name , email , password , phone});
    }

    handleChange=e=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        // this.setState({name:e.target.value})

        let value = e.target.value;
        let nameAtr = e.target.name;
        this.setState({[nameAtr]:value})
    }
    
  render() {
    // console.log(this.state);
    return (
        <div id={Styles.formBlock}>
        <form onSubmit={this.handleSubmit}>
            <div className={Styles.field}>
                <input type="text" placeholder='enter user name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                />
            </div>
            <div className={Styles.field}>
                <input type="email" placeholder='enter user email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>
            <div className={Styles.field}>
                <input type="password" placeholder='enter user password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>
            <div className={Styles.field}>
                <input type="tel" placeholder='enter phone number'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChange}
                />
            </div>
            <div className={Styles.field}>
                <input type="submit" value="Sign Up"/>
            </div>
        </form>
      </div>
    )
  }
}
