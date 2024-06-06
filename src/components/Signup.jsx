import React from 'react'


function Signup() {
  return (
    <div className='container'>
    
    <div className="signup-container">
        <form className="">
            <h1>Sign up</h1>
            <div className="input-container">
            <input type="text" placeholder="Username" required />
            </div>
            <div className="input-container">
            <input type="email" placeholder="Email" required />
            </div>


            <div className="input-container">
            <input type="password" placeholder="Password" required />
            </div>
            
        </form>
      </div>



    </div>
  )
}

export default Signup
