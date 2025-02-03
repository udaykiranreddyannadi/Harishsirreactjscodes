import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
   // console.log(props)
  return (
    <div>
      child2
      
      <hr/>
      <Child3 state={props.state}/>
    </div>
  )
}

export default Child2
