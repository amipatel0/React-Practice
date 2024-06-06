import React, { useState,useEffect} from 'react'

function CounterHook() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')
    
    useEffect(()=>{

       // console.log('useEffect - Updating document title')
        document.title=`You clicked ${count},${name} times`
       
    },[count,name])
   
  return (
    <div>
         <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        <h2>{count}</h2>

        {name}
    </div>
  )
}

export default CounterHook
