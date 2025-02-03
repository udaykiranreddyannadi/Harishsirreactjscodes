//rafce
// import React, {useState} from 'react'

// const FBCStateEx1 = () => {
//   //console.log(this); //here we will get undefine because function does not have anhy object and meathod to update value
//   const state= useState("uday kiran reddy");
//   //console.log(state);   //here we will be getting one array ,here in undefined value can be stored  
//   //console.log(state[0]);
//   //console.log(state[1]);

//   //!instade of the above we will be destructuring the  state

//   //const [username,setUsername]= useState("uday");
//   const [username,setUsername]= useState(true)
//   console.log(username);

// let changeName= ()=>{
//     setUsername("sujatha reddy")
// }
//   return (
//     <div>
//       FBCStateEx1

//       {/* <h1>{username}</h1> */}
//       <h1>{username == true? "True":"false"}</h1>
//       <button onClick={changeName}>Change name</button>
//     </div>
//   )
// }

// export default FBCStateEx1

//!one more example
import React, { useState } from 'react'

const FBCStateEx1 = () => {
  const [count, setCount] = useState(0);
  let increment= ()=>{
    //count++;
    //setCount(count+1);
    // setCount(count+1);  
    // setCount(count+1);//here if we call multiple setCount Functions wont remember the previous functions

    setCount((preValue)=>preValue+1);
    setCount((preValue)=>preValue+1);
  }
  let decrement=()=>{

    setCount(count-1);
  }
  let reset=()=>{
    setCount(0);
  }
  console.log("component get called..")
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default FBCStateEx1