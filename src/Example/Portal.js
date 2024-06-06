import React from 'react'
import ReactDOM from 'react-dom'
function Portal() {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello This is Anil</h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default Portal
