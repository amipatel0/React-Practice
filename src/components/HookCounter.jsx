import React,{useState} from 'react'

function HookCounter() {

  const intialval=0
    const[count,setCount]=useState(intialval)


    const handleClick = () => {
      for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1);
      }
    };
    //setCount(count=>count+5)
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>&nbsp;&nbsp;
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>&nbsp;&nbsp;
      <button onClick={()=>setCount(intialval)}>Reset</button>&nbsp;&nbsp;

      <button onClick={handleClick}>Increment by five</button>

    </div>
  )
}

export default HookCounter
