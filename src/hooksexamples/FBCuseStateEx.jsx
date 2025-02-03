//!useState
import React,{Fragment, useState} from 'react'

const FBCuseStateEx = () => {

    const state=useState();
    //console.log(state[0]);
    //console.log(state[1]);
    //!Destructuring the useState
    const [name,setName]= useState("uday");
    const [users,setUsers] =useState(["uday","kiran","reddy","annadi"])
    //console.log(name);
    console.log(users);
    let handleChange=()=>{
        setName("sujatha")
    }
  return (
    <div>
      {/* <h1>{name}</h1>
      <button onClick={handleChange}>ChangeName</button> */}
    {
        users.map((user,i)=>{
            return(
                <Fragment key={i}>
                    <li>{user}</li>
                </Fragment>
            )
        })
    }    
    </div>
  )
}

export default FBCuseStateEx

//!destructing of an array
//rest parameter ....
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let [a,b,...c]=arr
// console.log(a);
// console.log(b);
// console.log(c);