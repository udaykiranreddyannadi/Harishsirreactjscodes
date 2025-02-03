

import React, { Component } from 'react';

class CBCstateEx1 extends Component {
    //!first way 
    // constructor(){
    //     super();
    //     //this.state=null;
    //     this.state={
    //         name:"uday",
    //         age:25,
    //         city:"hyderabad"
    //     };
    //     // this.state="Hello";
    //     //for the above only one state should be used either null or in the form of object but not the single values will be initialized
    // }
        changeName=()=>{
            this.setState({name:"reddy"})
        }

        //!second way
        state={
            name:"sujatha"
        }
    
    render() {
     //   console.log(this);//used to see the object(CBCstateEx1) inside the class
        return (
            <>
                <h1>Class Component State</h1>

                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.city}</h1>

                <button onClick={this.changeName}>Change Name</button>
                {/* once each changes happing in state the component will be render since it need to be updated in ui */}

            </>
        );
    }
}

export default CBCstateEx1;