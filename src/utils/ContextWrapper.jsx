//!utiles folder for useContext
//this component will wraps all the child components
//with this component we can return one more component which return the data (global data)

import React,{createContext, useEffect, useState} from 'react'

export let GlobalProvider=createContext();  //here we are exporting the GlobalProvider which will be availabe anywhere 
console.log(GlobalProvider);
const ContextWrapper = (props) => {
    const [users,setUsers]=useState([]);//for fetching api
    //console.log(users);
    useEffect(()=>{
        window.fetch("https:api.github.com/users")
        .then(res=>res.json().then(data=>{
            setUsers(data)
        }))
        .catch(err=>console.log(err))
    },[])
  //return <GlobalProvider.Provider value="uday kiran reddy"> {props.children}</GlobalProvider.Provider>
    return <GlobalProvider.Provider value={{username:"uday",users}}>
        {props.children}
    </GlobalProvider.Provider>

{/* //this childern have having accessable to the values or data GlobalProvider.provider */}
  
   
}

export default ContextWrapper
