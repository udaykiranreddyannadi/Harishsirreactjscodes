//rcc
// import React, { Component } from 'react';  //here wre are destructuring the component form react

// class CBCpropsEx1 extends Component {
//     render() {
//         console.log(this);
//         //console.log(this.props.username); //this will print the data in console
//         return (
//             <div>
//                 CBCpropsEx1

//                 <h1>{this.props.username}</h1>
//                 <h1>{this.props.age}</h1>
//                 {
//                     this.props.isLoggedIn == true? <h1>Welcome user</h1> :<h1>Login</h1>
//                 }

//                 <h1>My name is {this.props.userDetails.name} and iam still {this.props.maritalStatus}</h1>
//                 {
//                     this.props.users.map((user,i)=>{

//                         return(
//                             <React.Fragment key={i}>
//                                 <li>{user}</li>

//                             </React.Fragment>
//                         )

                        

//                     })
                    
                    
//                 }

//                 <button onClick={this.props.sendFun}>Click</button>
//             </div>
//         );
//     }
// }

// export default CBCpropsEx1;

//!object destructuring examples
// let obj ={
//     name:"uday",
//     age:25
// }

// console.log(obj.name)
// console.log(obj.age)

//for the above object if we need to get the data we need to use obj.name
//instead of this we are destructuring the object ,with is we will get the data using single - name

// let obj ={
//     name:"uday",
//     age:25
// }
// let {name ,age}=obj
// console.log(name)
// console.log(age)



//!default props
// import React, { Component } from 'react';

// class CBCpropsEx1 extends Component {
//     render() {
//         return (
//             <div>
//                 App
//         FBCpropsex1

//         <h1>{this.props.username}</h1>
//         <h1>{this.props.age}</h1>
//         <h1>{this.props.city}</h1>
//             </div>
//         );
//     }
// }

// export default CBCpropsEx1;


// CBCpropsEx1.defaultProps={
//     username:"miller",
//     age:25,
//     city:"Bengaluru"
//   }


//!props children

import React, { Component } from 'react';

class CBCpropsEx1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                CBCpropsEx children
       <h1>{this.props.username}</h1>
       <h1>{this.props.age}</h1>
       <h1>{this.props.city}</h1>
        {this.props.children}         
            </div>
        );
    }
}

export default CBCpropsEx1;
