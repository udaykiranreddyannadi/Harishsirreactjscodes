import React from 'react'
import Child5 from './Child5'

const Child4 = (props) => {
   // console.log(props)
  return (
    <div>
      child4
      <hr/>
      <Child5 state={props.state}/>
    </div>
  )
}

export default Child4
