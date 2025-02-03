import React, { Component, createRef } from 'react';

class CBCrefEx extends Component {
    demoRef=createRef();
    componentDidMount(){
        this.demoRef.current.style.backgroundColor = "teal";
        this.demoRef.current.style.color = "white";
        this.demoRef.current.innerText="ReactJS"

    }
    render() {
        console.log(this.demoRef);
        return (
            <div>
                <h1 ref={this.demoRef}>Class Base component</h1>

            </div>
        );
    }
}

export default CBCrefEx;

