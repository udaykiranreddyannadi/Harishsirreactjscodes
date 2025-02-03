import React, { Fragment, useContext } from 'react';
import { GlobalProvider } from '../utils/ContextWrapper';

const Child5 = () => {
  const data = useContext(GlobalProvider);
  console.log(data.users);

  return (
    <div> Child5
      {
        data.users.map((user,i)=>{
            return(
                <Fragment key={i}>
                    <img src={user.avatar_url} alt='' style={{width:"100px",height:"100px",borderRadius:"50%"}}/>

                </Fragment>
            )
        })
      }
    </div>
  );
};

export default Child5;
