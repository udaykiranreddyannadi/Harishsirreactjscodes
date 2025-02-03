import React, { useContext } from 'react'
import Child3 from './Child3'
import { GlobalProvider } from '../utils/ContextWrapper';

const Child2 = () => {
    const data=useContext(GlobalProvider); //this use context should have an variable
    console.log(data);
  return (
    <div>
      child2
      <h2>{data.username}</h2>
      <hr/>
      <Child3/>
    </div>
  )
}

export default Child2
