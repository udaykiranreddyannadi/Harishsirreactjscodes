//!here the child 1 child2 child3 child4 child5 files used for useContyext examples
import React, { useContext } from 'react';
import Child2 from './Child2';
import { GlobalProvider } from '../utils/ContextWrapper';

const Child1 = () => {
    const data = useContext(GlobalProvider);
    console.log(data);
  return (
    <div>
      child1
      {
        data.users.map((user,i)=>{
            return <li key={i}>{user.login}</li>
        })
      }
      <hr/>
      <Child2 />
    </div>
  );
};

export default Child1;
