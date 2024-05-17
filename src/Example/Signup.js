import React from 'react'
import './Signup.css';
import { FaUser , FaLock , FaEnvelope } from "react-icons/fa";


function Signup() {
  return (
    <div className='container'>
    
    <div className="signup-container">
        <form className="">
            <h1>Sign up</h1>
            <div className="input-container">
            <input type="text" placeholder="Username" required />
            <FaUser  className="icon" />
            </div>
            <div className="input-container">
            <input type="email" placeholder="Email" required />
            <FaEnvelope  className="icon" />
            </div>


            <div className="input-container">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon"  />
            </div>
            <div className="remember">
                <label><input type="checkbox"/>I agree to the terms and conditions</label>
            </div>
            <button type="submit">Signup</button>
            <div className="register">
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>

            
        </form>
      </div>



    </div>
  )
}

export default Signup
