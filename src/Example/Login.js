import React from 'react'
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



function Login() {
  return (
    <div className='container'>
    <div className="login-container">
        <form className="">
            <h1>Login</h1>
            <div className="input-container">
            <input type="text" placeholder="Username" required />
            <FaUser  className="icon" />
            </div>

            <div className="input-container">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon"  />
            </div>
            <div className="remember">
                <label><input type="checkbox"/>Remember me</label>
                <a href='#'>Forgot Password?</a>

                
            </div>
            <button type="submit">Login</button>
            <div className="register">
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>

            
        </form>
      </div>


     
      

    </div>
  )
}

export default Login
