import React,{useState} from 'react';

function Counter1(){
    const [count,setCount] = useState(0);
    
    return(
        <>
        <h1>Count App</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount((increment)=>increment+1)}>
            Add1
        </button>
        
        </>
        
    )
    
}
export default Counter1;