import React from 'react'
import Child4 from './Child4'

const Child3 = (props) => {
   // console.log(props)
  return (
    <div>
      child3
      <hr/>
      <Child4 state={props.state}/>
    </div>
  )
}

export default Child3
