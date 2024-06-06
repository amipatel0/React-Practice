import React,{useState,useEffect} from 'react'

function HookIntervalCounter() {
  const[count,setCount]=useState(0)

  const tick=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    const i=setInterval(tick,4000)
    return()=>{
      clearInterval(i)
    }

  },[count])
  return (
    <div>
Count value is:${count}

      
    </div>
  )
}

export default HookIntervalCounter
