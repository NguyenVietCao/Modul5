import React,{useState} from 'react';

function Counter2(){
    const [count,setCount] = useState(0);
    
    return(
        <>
        <h1>Count App</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount((increment)=>increment+1)}>
            Add2
        </button>
        
        </>
        
    )
    
}
export default Counter2;