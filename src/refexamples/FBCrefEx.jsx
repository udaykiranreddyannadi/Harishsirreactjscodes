// import React, { useEffect, useRef } from 'react';

// const FBCrefEx = () => {
//     const demoRef = useRef();
//     //console.log(demoRef);
//     useEffect(()=>{
//         demoRef.current.style.background="orange";
//         demoRef.current.style.color="white";
//         demoRef.current.innerHTML="uday kiran reddy"
//     })
//   return (
//     <div>
//       <h1 ref={demoRef}>functional component</h1>
//     </div>
//   )
// }

// export default FBCrefEx;

//!avoiding of rerendering in ref

// import React, { useState, useRef, useEffect } from 'react';

// const FBCrefEx = () => {
//     const demoRef = useRef();

//     const [values,setValue]=useState(0);
//     //const [count,setCount]=useState(0);

//     // useEffect(()=>{
//     //     setCount(count+1);
//     // },[values]);

//     //the above render can be avoided with
//     const count=useRef(0);
//     useEffect(()=>{
//         count.current=count.current+1;
//     })
    
//   return (
//     <div>
//       <h1 >{values}</h1>
//       <button onClick
// 
// ={()=>setValue(pre=>pre+1)}>+</button>
//       <button onClick={()=>setValue(pre=>pre-1)}>-</button>
//       <h1>rerender Count:{count.current}</h1>
//     </div>
//   )
// }

// export default FBCrefEx;

//!ref can be used for media playing

// import React, { useRef, useState } from 'react';
// import VIDEO from './video.mp4';

// const FBCrefEx = () => {
//     const videoRef = useRef(null);
//     console.log(videoRef);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const playOrPause = () => {
//         if (isPlaying) {
//             videoRef.current.pause();
//         } else {
//             videoRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div>
//             {/* <video ref={videoRef} src={VIDEO} width={300} height={300} controls></video> */}
//             <video ref={videoRef} src={VIDEO} style={{ width: '300px', height: '300px' }} controls></video> 
//             {/* inline css is applied to the viedo */}

//             <button onClick={playOrPause}>
//                 {isPlaying ? 'Pause' : 'Play'}
//             </button>
//         </div>
//     );
// }

// export default FBCrefEx;

//!module style is used for the below code 

import React, { useRef, useState } from 'react';
import VIDEO from './video.mp4';
import Style from './example.module.css'; // Ensure the file name is correct

const FBCrefEx = () => {
    const videoRef = useRef(null);
    console.log(videoRef);
    const [isPlaying, setIsPlaying] = useState(false);

    const playOrPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div id={Style.container}>
            <video ref={videoRef} src={VIDEO} className={Style.vid} controls></video> 
            <button onClick={playOrPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
}

export default FBCrefEx;
