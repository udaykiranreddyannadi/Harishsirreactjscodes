import React, { Component } from 'react';
import ChildToRemove from './ChildToRemove';

class Unmount extends Component {

    state={
        display:true
    }
    removeChild=()=>{
            this.setState({display:false})
    }
    render() {
        //console.log(this.state.display)
        let comp;
        if(this.state.display==true){
            comp= <ChildToRemove/>
        }

        return (
            <div> 
               {comp} 
                <button onClick={this.removeChild}>Remove Child Component</button>
            </div>
        );
    }
}

export default Unmount;