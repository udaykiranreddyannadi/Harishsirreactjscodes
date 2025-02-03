import React from "react";//used for rcreating elements in >react way
//react dom library will create virtual dOM
import ReactDOM from "react-dom/client";

//it will create one empty container
//ReactDOM.createRoot(document.getElementById("root")).render(<div><h1> welcome to excel r</h1></div>);

//above code is created in the form of jsx

//!above code with react js
// let element= React.createElement("div",{id:"demo"},
//     React.createElement("h1",null,"hello"),
//     React.createElement("p",null,"para")
// );

// ReactDOM.createRoot(document.getElementById("root")).render(element);

// ReactDOM.createRoot(document.getElementById("root")).render(
// <div id="demo">
// <h1> welcome to excel r</h1>
// <p> paragraph</p>
// </div>
// );

// let x=1000;
// let user="faran";
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <div id="demo">
//     <h1> welcome to excel r</h1>
//     <p> paragraph</p>
//     {/* <h1>x</h1>
//     <h1>user</h1> */}
//     {/* // for the above code  x and user are printed in h1 tags it is not consider as variables */}
//     {/* for the above variables are called as jsx expressions {} */}
//     <h1>{x}</h1>
//     <h1>{user}</h1>
//     {/* mathematic expression can also be done in jsx expression */}
//     <h1>{100*4}</h1>
//     </div>
//     );

import "./global.css"
import App from "./App" 
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);