// import React, { useEffect } from 'react'

// const FBCUseEffectEx = () => {

//     // useEffect(()=>{


//     // },[])
//     //document.title="hooks"; //here the document title will be changed but we should not use , we need to follow certain standards should be used in use effect
    
//     return (
//     <div>
//       FBCUseeffect
//     </div>
//   )
// }

// export default FBCUseEffectEx

//!first case with out dependency

// import React, { Fragment, useEffect, useState } from 'react'


// const FBCUseEffectEx = () => {

// const [count ,setCount]=useState(0);
// const [users,setUsers]= useState([])//empty array created using state 
// // useEffect(()=>{
// //     setCount(1000); //here we are updating the count without click using the useEffict 
// // })
// //!first case with out dependency
// // useEffect(()=>{
// //     setInterval(()=>{
// //         setCount(count+1)

// //     },1000);  
// // })
// //witout the dependency infinite times the re-render will happen    

// //! case with  empty dependency
// // useEffect(()=>{
// //     setInterval(()=>{
// //         setCount(count+1)

// //     },1000);  
// // },[])

// //!with variable
// // useEffect(()=>{
// //     setInterval(()=>{
// //         setCount(count+1)

// //     },1000);  
// // },[count])

// //!for fetching API

// useEffect(()=>{
//     window.fetch("https://api.github.com/users")
//     .then((res)=>res.json().then((data)=>{
//         console.log(data);
//         setUsers(data)
//     })).catch(err=>console.log(err));
// },[]) //here empty dependency is used to fetch one time


//     return (
//     <div>
//       {/* FBCUseeffect */}
//       {/* <h1>{count}</h1> */}
//       {
//         users.map((user,i)=>{
//             return(
//                 <Fragment key={i}>

//                         <img src={user.avatar_url} alt=''/>
//                         <h1>{user.login}</h1>
//                 </Fragment>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default FBCUseEffectEx

//!

import React,{useEffect, useState} from 'react'

const FBCUseEffectEx = () => {
    const [value,SetValue]=useState(0);
    const [count,SetCount]=useState(0);

    // useEffect(()=>{
    //     SetCount(pre=>pre+1)
    // })

    // useEffect(()=>{
    //     SetCount(pre=>pre+1)
    // },[])

    useEffect(()=>{
        SetCount(pre=>pre+1)
    },[value])
  
  
    return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>SetValue((pre)=>pre+1)}>+</button>
        <button onClick={()=>SetValue((pre)=>pre-1)}>-</button>
        <h1>render of component: {count}</h1>
    </div>
  )
}

export default FBCUseEffectEx
