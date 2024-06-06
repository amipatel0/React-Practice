import React, { useEffect } from 'react'

import {NavLink} from "react-router-dom"
export const Navigation = () => {
  
  
  return ( 
         <div>
          
        <nav>
           
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/team'>Team</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
          </nav>
           
                 
       
          </div>
      
   
  )
}
export default Navigation;

