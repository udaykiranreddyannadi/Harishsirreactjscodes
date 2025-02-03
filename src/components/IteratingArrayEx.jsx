//! iterating arrays in class base components
// import react,{Component} from "react"

// class IteratingArrayEx extends Component{
//     //variables wont work in class
    
//     render(){
//         let user=["uday","kiran","reddy","annadi","uday"];
        
//         //console.log(user);
//         let data=user.map((user,i)=>{
//             //console.log(user)
//             return <li key={i}>{user}</li>
//         });
//         //console.log(data);
//         return(
//             <div>IteratingArrayEx
//                 {data}
//             </div>
            
//         )
//     }

// }
// export default IteratingArrayEx;

//!iteration arrays in jsx expression

// import react,{Component} from "react"

// class IteratingArrayEx extends Component{
//     //variables wont work in class
    
//     render(){
//         let user=["uday","kiran","reddy","annadi","uday"];
        
        
//         return(
//             <div>IteratingArrayEx
//                 {
//                     user.map((user1,index)=>{

//                         return(
//                             <h2 key={index}>{user1}</h2> //here we wont get the warning for duplicate values since we are using list the duplicate values in differnet position
//                             //<h2>{user1}</h2> //here we will get the warinng if we have duplicate values in arrays
//                         )
//                     })
//                 }
//             </div>
            
//         )
//     }

// }
// export default IteratingArrayEx;


//!fragrament component

import React, { Component } from "react";

class IteratingArrayEx extends Component {
    render() {
        let user = ["uday", "kiran", "reddy", "annadi", "uday"];
        return (
            <div>IteratingArrayEx
                {
                    user.map((user1, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div>{user1}</div>
                                <p>{index}</p>
                            </React.Fragment>
                        );
                    })
                }
            </div>
        );
    }
}

export default IteratingArrayEx;
