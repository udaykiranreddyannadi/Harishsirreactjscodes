//!rafce
import React from 'react'

const FragramentsEx = () => {
  return (
    //  <div> 
        <>   
        {/* here we are using parent division tag  if we need to display more than one elements , here it will create dom tree structure more 
        same way if we create elements with parent with division ,dom will use extra memory with div nodes.
        -fragraments are components which will act as a parent element but it wont create extra node in dom tree structure  */}
        <h2>Fragraments</h2>
        <p>lorem paragraph</p>
    {/* </div> */}
    </>
  )
}

export default FragramentsEx

