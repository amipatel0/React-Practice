import React,{useState} from 'react'
import MouseHook from './MouseHook'
function ContainerMouse() {
    const[show,setShow]=useState(true)
  return (
    <div>
      <button onClick={()=>setShow(!show)}> Toggle Show</button>
      {show && <MouseHook/>}
    </div>
  )
}

export default ContainerMouse
