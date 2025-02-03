//rcc
//!below is the example of render and constructure mounting phase
// import React, { Component } from 'react';

// class MountingPhase extends Component {
//     constructor(){
//         //here the constructure is called before the render meathod called
//         console.log("constructure is called")
//         super();
//         this.state={
//             username:"uday kiran reddy"
//         }

//     }
//     render() {
//         console.log("component mounted on the browser")
//         return (
//             <div>
//                 MountingPhase
//                 <h1>{this.state.username}</h1> 
//                 {/* here for the above to print the useranme first it will check the initialization (therefore the constructure is called to chech the value, if constriucture is ont initialized  we will get error) */}
//             </div>
//         );
//     }
// }

// export default MountingPhase;


//! mountingphase-static getDerivedStateFromProps(props,state)

// import React, { Component } from 'react';

// class MountingPhase extends Component {
//     constructor(){
//         //here the constructure is called before the render meathod called
//         console.log("constructure is called")
//         super();
//         this.state={
//             username:"uday kiran reddy"
//         }

//     }
//     //this will update the state value with this (without setState)
//     static getDerivedStateFromProps(props,state){
//         //console.log(props);
//         return{
//             username:props.username  //here the state value is updated with props value
//         }
//     }

//     render() {
//         console.log("component mounted on the browser")
//         return (
//             <div>
//                 MountingPhase
//                 <h1>{this.state.username}</h1> 
//                 {/* here for the above to print the useranme first it will check the initialization (therefore the constructure is called to chech the value, if constriucture is ont initialized  we will get error) */}
//             </div>
//         );
//     }
// }

// export default MountingPhase;

//! mountingphase-static componentDid mount

import React, { Component, Fragment } from 'react';

class MountingPhase extends Component {
    constructor(){
        //here the constructure is called before the render meathod called
        console.log("constructure is called")
        super();
        this.state={
            username:"uday kiran reddy",
            users:[]
        }

    }
    //this will update the state value with this (without setState)

    componentDidMount(){
        //this.setState({username:"jyothi reddy"}) //here it will update immediately
        //and setTimeOut is used in this meathod(componentDidmount) wothout this we will get error
        // setTimeout(()=>{
        //     this.setState({username:"jyothi reddy"});
        //   },5000);

           document.title=this.state.username //it willchange the title of document name  

        //!api fetching in componentDidmount
        window.fetch("https://api.github.com/users")
        .then(res=>res.json().then(data=>{
           // console.log(data);
           this.setState({users:data});
        }))
        .catch(err=>console.log(err))
    }
    

    render() {
       // console.log("component mounted on the browser")
        //console.log(this.state.users);
        return (
            <div>
                MountingPhase
                <h1>{this.state.username}</h1> 
                {/* here for the above to print the useranme first it will check the initialization (therefore the constructure is called to chech the value, if constriucture is ont initialized  we will get error) */}
                {
                    this.state.users.map((user,i)=>{
                        return(

                            <Fragment key={i}>
                                <img src={user.avatar_url} alt=""/>
                                <h2>{user.login}</h2>  
                            </Fragment>
                        )
                    })
                }
            </div>
        );
    }
}

export default MountingPhase;
