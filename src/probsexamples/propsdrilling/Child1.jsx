import React from 'react'
import Child2 from './Child2'
const Child1 = (props) => {
    //console.log(props);
  return (
    <div>
    child1
    <hr/>
    <Child2 state={props.state}/>
    </div>
  )
}

export default Child1
