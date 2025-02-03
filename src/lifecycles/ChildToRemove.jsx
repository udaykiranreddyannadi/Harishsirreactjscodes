import React, { Component } from 'react';


class ChildToRemove extends Component {
    componentWillUnmount(){
        window.confirm("Are you sure you want to delete the component")
    }
    render() {
        return (
            <div>
                <h1>ChildToRemove</h1>
                
            </div>
        );
    }
}

export default ChildToRemove;