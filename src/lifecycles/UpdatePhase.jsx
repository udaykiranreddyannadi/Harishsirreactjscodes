
//!UpdatePhase - ShouldComponebtUpdate
// import React, { Component } from 'react';

// class UpdatePhase extends Component {
//     constructor(){
//         super()
//         this.state={
//             username:"uday kiran reddy"
//         }
//     }
//     componentDidMount(){

//         setTimeout(()=>{
//             this.setState({username:"sujatha"})
//         },3000)
//     }

//     shouldComponentUpdate(){  //this meathod  will decide should the component to be updated or not true for update and false for not to update
//       return true;
//     }
//     render() {
//         return (
//             <div>
//                 {/* //Updatephase */}
//                 <h1>{this.state.username}</h1>
//             </div>
//         );   
//     }
// }

// export default UpdatePhase;


//!getSnapShotBeforeUpdate() and componentDidUpdate();

import React, { Component } from 'react';

class UpdatePhase extends Component {
    constructor(){
        super()
        this.state={
            username:"uday kiran reddy",
            count:0

        }
    }
    componentDidMount(){

        setTimeout(()=>{
            this.setState({username:"sujatha"})
        },3000)
    }

    shouldComponentUpdate(){  //this meathod  will decide should the component to be updated or not true for update and false for not to update
      return true;
    }
    handleClick=_=>{
        this.setState({count:this.state.count+1})
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("previous state value is"+state.count);
        return null; 
    }
    componentDidUpdate(props,state){
        console.log("current state value is "+this.state.count)
    }
    render() {
        return (
            <div>
                Updatephase
                <hr/>
                <h1>{this.state.username}</h1>
                <hr/>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click</button>

            </div>
        );   
    }
}

export default UpdatePhase;
