// import React from 'react'

// const FBCpropsEx1 = (props) => {  //here in function we will Pass props(we and enter any variable) will we passed as agrument in function
//  // console.log(this); //here we will get undefice since function is not as an object
// console.log(props); 
//     return (
//     <>
//       FBCpropsExamples
//       <h1>{props.username}</h1>

//       {
//        // props.addToCart==true?alert("Product added to cart"):alert("product not added to cart")
//       }
//       <h1>{props.city}</h1>
//       <h1>{props.userDetails.name}</h1>

//      {
//         props.users.map((user,i)=>{

//             return <li key={i}>{user}</li>
//         })
//      } 
    
    
    
//     </>
//   )
// }

// export default FBCpropsEx1


//!above code using destructuring of probs

// import React from 'react'

// const FBCpropsEx1 = (props) => {  //here in function we will Pass props(we and enter any variable) will we passed as agrument in function
//  // console.log(this); //here we will get undefice since function is not as an object
// console.log(props);
// let{username,age,city,addToCart,userDetails,users}= props;

//     return (
//     <>
//        <h1>{username}</h1>

//        {
//        // props.addToCart==true?alert("Product added to cart"):alert("product not added to cart")
//       }
//       <h1>{city}</h1>
//       <h1>{userDetails.name}</h1>

//      {
//         users.map((user,i)=>{

//             return <li key={i}>{user}</li>
//         })
//      } 
      
    
    
//     </>
//   )
// }

// export default FBCpropsEx1


//!props can be transvered to another component but state cannot be transfered from one component to another component,
//!but state can be transfered to another component through probs

// import React from 'react'

// const FBCpropsEx1 = (props) => {
//   console.log(props)
//     return (
//     <div>
//         <h1>{props.count}</h1>
//         <button onClick={props.increment}>Increment</button>
      
//     </div>
//   )
// }

// export default FBCpropsEx1


//!default props
// import React from 'react'

// const FBCpropsEx1 = (props) => {
//     console.log(props);
//     return (
//     <div>
//         App
//         FBCpropsex1

//         <h1>{props.username}</h1>
//         <h1>{props.age}</h1>
//         <h1>{props.city}</h1>
//     </div>
//   )
// }

// export default FBCpropsEx1

// FBCpropsEx1.defaultProps={
//   username:"miller",
//   age:25,
//   city:"Bengaluru"
// }

//!default props is not possible in functional base component

