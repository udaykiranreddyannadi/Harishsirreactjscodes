
//!class based component
// import React from "react";
// class App extends React.Component{
//     render(){
//         return(   
//             <div>
//                 <h1>Class based Component</h1>
//             </div>
//         )
//     }
// }
// export default App;

import ControlledCBCEx from "./formexamples/ControlledCBCEx";
import ControlledFBCEx from "./formexamples/ControlledFBCEx";
import UnControlledCBCEx from "./formexamples/UnControlledCBCEx"
import UnControlledFBCEx from "./formexamples/UnControlledFBCEx";
import ControlledForm from "./formproject/ControlledForm";
import FBCUseEffectEx from "./hooksexamples/FBCUseEffectEx"
import ControlledFBCEx1 from "./formexamples/ControlledFBCEx1";

import Navbar from './routing/Navbar';
//!function based component

// function App(){
//     return(
//         <div>
//              <h1>function based Component</h1>
//         </div>
//     )
// }

// export default App;

//!below is the function based component in the form of arrow function

// const App=()=>{
//         return(
//             <div>
//                  <h1>function based Component</h1>
//             </div>
//         )
//     }
    
//     export default App;
    

//!above code with arrow function

//11dec2024
//!component composion examples
// import React ,{Component}from "react";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
//  import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import "./global.css"//linking global.css to app.jsx since all the components will link to app.jsit will link to 
// const App=()=>{
//     return(
//         <div className="app">
//              <Navbar/>
//              <div className="parent">
//              <Sidebar/>
//              <Main/>
//                 </div>  
//              <Footer/>

//         </div>
//     )
// }

// export default App;


//!iterating arays using map()

// import react from "react"
// import IteratingArrayEx from "./components/IteratingArrayEx"
// const App=()=>{
//     return(
//         <IteratingArrayEx/>
//     )
// }

// export default App


//!iterating arrays

// const App = () => {
//     let nums = [1, 2, 3, 4, 5, 6];
//     let emptyArray=[];
//     for (let i = 0; i < nums.length; i++) {
//       //console.log(i);
//       //console.log(nums[i]);//here the elements are printed in console
//       //to print the elements in ui we need to store the values in one empty array and print the elements in ui using jsx expression
//         emptyArray.push(nums[i]);
    
//     }
//     return (
//       <div>
//         {/* {emptyArray} */}
//         {
//             emptyArray.map((val)=>{
//                return <li>{val}</li> //where ever we are using jsx expression we need to use return keyword
//             })    
//         }
//       </div>
//     );
//   };
  
//   export default App;
  
//!iteration  array
// const App = () => {
//     let nums = [1, 2, 3, 4, 5, 6];
//     let emptyArray=[];
//    nums
//       //console.log(i);
//       //console.log(nums[i]);//here the elements are printed in console
//       //to print the elements in ui we need to store the values in one empty array and print the elements in ui using jsx expression
//         emptyArray.push(nums[i]);
    
//     }
//     return (
//       <div>
//         {/* {emptyArray} */}
//         {
//             emptyArray.map((val)=>{
//                return <li>{val}</li> //where ever we are using jsx expression we need to use return keyword
//             })    
//         }
//       </div>
//     );
//   };
  
//   export default App;
  
//!example 2

// import React from 'react';

// let users = ["uday", "kiran", "reddy","sujatha"];

// const App = () => {
//   return (
//     <div>
//       {
//         users.map((user,index)=>{
//            // console.log(user) //here it will print in console

//            //return <h1>{user}</h1> //here it will print in ui  //this waring we will get here (Each child in a list should have a unique "key" prop).

//            //here the contant will be returnin in the form of list

//            //!using list and key

//            return <h1 key={index}>{user} </h1>  //here we wont get warning
//         })
//       }
//     </div>
//   );
// };

// export default App;


//!example IN CBC
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     let users = ["uday", "kiran", "reddy", "sujatha"];
//     return (
//       <div>
//         {users.map((user, index) => (
//           <h1 key={index}>{user}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

//!linking iteration arraways through component composition

// import React ,{Component}from "react";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
//  import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import "./global.css"//linking global.css to app.jsx since all the components will link to app.jsit will link to 
//import IteratingArrayEx from "./components/IteratingArrayEx";
//import FragramentsEx from "./components/FragramentsEx";
// import Table from "./components/Table";
// const App=()=>{
//     return(
//         <div className="app">
             
//              <Table/>
//         </div>
//     )
// }

// export default App;



//!state examples

// import React from 'react'

// import FBCStateEx1 from './stateexamples/FBCStateEx1'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCstateEx1/> */}
      
//       <FBCStateEx1/>
//     </div>
//   )
// }

// export default App


//!probs examples
//rafce

// import React from 'react'
// import CBCpropsEx1 from './probsexamples/CBCpropsEx1'
// import FBCpropsEx1 from './probsexamples/FBCpropsEx1'

// const App = () => {
//   return (
//     <div>
//       <CBCpropsEx1 username="uday" age={25} isLoggedIn={true}
      
//       userDetails={{name:"uday",age:25, maritalStatus:"single"}}

    
//       users={["uday","kiran","reddy","sujatha"]}

//       sendFun={function(){alert("hai iam comming from parent component")}}

//       />



//       <br/><br/><br/><br/> <hr/>
//       <br/><br/>


//       <FBCpropsEx1
//         username="keerthy"
//         age={26}
//         city="hyd"
//         addToCart={true}
      
//         userDetails={{name:"keerthy",age:25, maritalStatus:"single"}}
//         users={["uday","kiran","reddy","sujatha"]}
//       />


//     </div>
//   )
// }  

// export default App


//!counter example

// import React, { useState } from 'react';
// import FBCpropsEx1 from './probsexamples/FBCpropsEx1' 

// const App = () => {
//     const [count,setCount]=useState(0);

//     let increment=()=>{
//       setCount(count+5);
//     }

//     return (
//         <div>
//             app
//             <FBCpropsEx1 count={count} increment={increment}/> //here we are passing state values to another component using props
//             {/* here it will pass the properties as argument to the FBCpropsEx1 */}
//         </div>
//     );
// }

// export default App;

//!default props (16dec2024)

// import React from 'react'
// import CBCpropsEx1 from './probsexamples/CBCpropsEx1'

// const App = () => {
//   return (
//     <div>
//       <CBCpropsEx1 username="uday"/>

//       <br/> <br/> <br/> <hr/>
//       <CBCpropsEx1 age={25}/>
//       <br/> <br/> <br/> <hr/>
//       <CBCpropsEx1 city="new york"/>
//     </div>
//   )
// }

// export default App

//!props children

// import React from 'react'
// import CBCpropsEx1 from './probsexamples/CBCpropsEx1'
// import CBCstateEx1 from './stateexamples/CBCstateEx1'
// const App = () => {
//   return (
//     <div>
//       <CBCpropsEx1 username="reddy" age={25} city="hyd" >
//         <h1>iam passing as a child element</h1> 
//         {/* //here child element will be component or jsx expression  */}

//             <CBCstateEx1/>
//             {/* for the above wea are passing class component as children  */}
//       </CBCpropsEx1>
//     </div>
//   )
// }

// export default App


//!prop type example 

// import React from 'react'
// import PropTypeEx from './probsexamples/PropTypeEx'

// const App = () => {
//   return (
//     <div>
//       <PropTypeEx username="reddy" age={25} city="hyd"/>

      
//     </div>
//   )
// }

// export default App


//!Props Drilling
// import React, { useState } from 'react'
// import Child1 from './probsexamples/propsdrilling/Child1'


// const App = () => {
//     const [state,setState] = useState([1,2,3,4,5,6,7,8,9]);
  
//     return (
//     <div>
//         App
//       <Child1 state={state}/>
//     </div>
//   )
// }

// export default App


//!react shortcuts
//rfce -react function 
//rcc react class component
//rafce -react arrow functional component

//imr -import react from react
//imrd -import react dom from react dom

//!conditional rendering

// import React from 'react'
// import FBCconditionsex1 from './conditions/FBCconditionsex1'

// const App = () => {
//   return (
//     <div>
//       app
//       <FBCconditionsex1/>
//     </div>
//   )
// }

// export default App

// 


//!life cycle
// import React from 'react'
// import MountingPhase from './lifecycles/MountingPhase'

// const App = () => {
//   return (
//     <div>
//       <MountingPhase/>
//     </div>
//   )
// }

// export default App

//!life cycle -mounting phase-static getDerivedStateFromProps(props,state)
// import React from 'react'
// import MountingPhase from './lifecycles/MountingPhase'

// const App = () => {
//   return (
//     <div>
//       <MountingPhase username="sujatha"/>
//     </div>
//   )
// }

// export default App


// //!updating phase
// import React from 'react'
// import UpdatePhase from './lifecycles/UpdatePhase'

// const App = () => {
//   return (
//     <div>
//       <UpdatePhase/>
//     </div>
//   )
// }

// export default App


//!unmounting
// import React from 'react'
// import Unmount from './lifecycles/Unmount'

// const App = () => {
//   return (
//     <div>
//       <Unmount/>
//     </div>
//   )
// }

// export default App

//!hooks - useState

// import React from 'react'
// import FBCuseStateEx from './hooksexamples/FBCuseStateEx'

// const App = () => {
//   return (
//     <div>
//       <FBCuseStateEx/>
//     </div>
//   )
// }

// export default App

//!hooks - useState

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <FBCUseEffectEx/>
//     </div>
//   )
// }

// export default App


//!hooks useContext()

// import React from 'react'
// import ContextWrapper from "./utils/ContextWrapper"
// import Child1 from "./hooksexamples/Child1"

// function App() {
//   return (
//     <div>
//         {/* //here the components which come under <contectwrapper></contectwrapper> will be accessable to  global data */}
//       <ContextWrapper> 
//         <Child1/>
//       </ContextWrapper>
//     </div>
//   )
// }

// export default App


//!ref exaples
// import React from 'react'
// import CBCrefEx from "./refexamples/CBCrefEx"
// import FBCrefEx from "./refexamples/FBCrefEx"

// const App = () => {
//   return (
//     <div>
//       {/* <CBCrefEx/> */}
//       <FBCrefEx/>
//     </div>
//   )
// }

// export default App

//!events examples

// File: App.js
// import React from 'react';
// import ONclickEventex from './eventsexamples/ONclickEventex';

// const App = () => {
//   return (
//     <div>
//       <ONclickEventex />
//     </div>
//   );
// }

// export default App;


// //!audio with ref
// import React from 'react'
// import FBCrefEx from "./refexamples/FBCrefEx"

// const App = () => {
//   return (
//     <div>
//       <FBCrefEx/>
//     </div>
//   )
// }

// export default App


//!forms validation on react js

// import React from 'react';
// //import UnControlledCBCEx from "./formexamples/UnControlledCBCEx";

// const App = () => {
//   return (
//     <div>
//       {/* <UnControlledCBCEx/> */}
//       {/* <UnControlledFBCEx/> */}
//       <ControlledCBCEx/>
//     </div>
//   );
// };

// export default App;


// //!form project contrilled form
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <ControlledForm/>

          
//     </div>
//   );
// }

// export default App;

//!form project Uncontrolled form
// import React from 'react';
// import UncontrolledForm from './formproject/UncontrolledForm'; // Ensure the path is correct

// const App = () => {
//   return (
//     <div>
//       {/* <ControlledForm /> */}
//       <UncontrolledForm />
//     </div>
//   );
// };

// export default App;


//!controlledFBC
// import React, { Component } from 'react';
// //import ControlledFBCEx1 from './ControlledFBCEx1'; // Make sure the path is correct

// class App extends Component {
//   render() {
//     return (
//       <div>
        
//       <ControlledFBCEx1/>
//       </div>
//     );
//   }
// }

// export default App;

//!react-routing- dom
// import React, { Suspense } from 'react';
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Dashboard from "./routing/components/Dashboard";
// import ClassRooms from "./routing/components/ClassRooms";
// import Assessments from "./routing/components/Assessments";
// //import Store from "./routing/components/Store";
// import Calender from "./routing/components/Calender";
// import News from "./routing/components/News";
// import Blog from "./routing/components/Blog";
// import PageNotFound from "./routing/components/PageNotFound";
// import FSD1 from "./routing/components/FSD1";
// import FSD2 from "./routing/components/FSD2";
// import Users from "./routing/components/Users";

// const Store =React.lazy(()=>import("./routing/components/Store"))
// //for the above store will not loade unnecessary time , when the user calls it will be loades
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         {/* Here below path will consider as a link */}
//         <Route path='/' element={<Dashboard />} />
//         {/* For dashboard to open in home page */}
//         <Route path='/classRooms' element={<ClassRooms />}>
//           <Route path='fsd1' element={<FSD1/>} />
//           <Route path='fsd2' element={<FSD2/>} />
//         </Route>
//         <Route path='/assessments' element={<Assessments />} />
//         {/* <Route path='/store' element={<Store />} /> */}
//         <Route path='/store' element={<Suspense fallback="<div> loading</div>"><Store/></Suspense>} /> 
//         <Route path='/calender' element={<Calender />} />
//         <Route path='/news' element={<News />} />
//         <Route path='/blog' element={<Blog />} />
//         <Route path='*' element={<PageNotFound />} />
//         {/* except the above. "*" will capture all remaining */}
//         <Route path='users/:userid' element={<Users/>}/> 
//         {/* slog */}
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//!crud operations

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="bg bg-primary p-3 text-light">
      app
    </div>
  )
}

export default App


//json-server --watch users.json --port=8000