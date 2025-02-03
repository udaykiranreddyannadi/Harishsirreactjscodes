// import React, { useState } from 'react'

// const FBCconditionsex1 = () => {
//     const [isLoggedIn,setLoggedIn]=useState(true);
//   if(isLoggedIn==true){
//     return <h1>Welcome User</h1>
//   }
//   else {
//     return <h1>login first</h1>
//   }
    
  
// }

// export default FBCconditionsex1


//!!

// import React, { useState } from 'react'
// import Welcome from './Welcome';
// import Login from './Login';

// const FBCconditionsex1 = () => {
//     const [isLoggedIn,setLoggedIn]=useState(true);
//   if(isLoggedIn==true){
//     return <Welcome/> 
//   }
//   else {
//     return <Login/>
//   }
    
  
// }

//  export default FBCconditionsex1


//!using ternary condition

// import React, { useState } from 'react';
// import Welcome from './Welcome';
// import Login from './Login';

// const FBCconditionsex1 = () => {
//     const [isLoggedIn, setLoggedIn] = useState(true);

//     return (
//         <div>
//             {
//                 // isLoggedIn === true ? <h1>Welcome</h1> : <h1>Login first</h1>
//                 isLoggedIn === true ? <Welcome/> : <Login/>
//             }
//         </div>
//     );
// }

// export default FBCconditionsex1;


//!using switch

import React, { useState } from 'react';
import Welcome from './Welcome';
import Login from './Login';


const FBCconditionsex1 = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
  switch(isLoggedIn){
    case true:
        return <Welcome/>
        break;

        case false:
            return <Login/>

            default:return null;
            break;
  }
        
}

export default FBCconditionsex1