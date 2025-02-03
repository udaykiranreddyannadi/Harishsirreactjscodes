import React from 'react'

const Child5 = (props) => {
   // console.log(props)
  return (
    <div>
      
      child5
    {
      props.state.map((val,i)=>{
      return <li key={i}>{val}</li>
    })
    
    }
    </div>
  )
}

export default Child5
