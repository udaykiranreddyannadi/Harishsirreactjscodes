//!click event
// import React,{useState} from 'react'

// const ONclickEventex = () => {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// };

// export default ONclickEventex

//!on form submit evevnt

import React, { useState } from 'react';

const ONclickEventex = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You entered: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter something:
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ONclickEventex;
