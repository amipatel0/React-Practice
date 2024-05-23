import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.name()}>Say Hello</button>
    </div>
  )
}

export default ChildComponent
