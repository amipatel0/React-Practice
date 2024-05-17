import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <div>
       <footer class="bg-primary text-light py-4 mt-5">
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-3">
                  <h5 style={{color:'black'}}><b><i>Location</i></b></h5>
                  <p>112 Main St, Surat, Gujarat</p>
                  <i class="fas fa-map-marker-alt"></i> 
              </div>
              <div class="col-md-3">
                  <h5 style={{color:'black'}}><b><i>Contact</i></b></h5>
                  <p>Email: example@example.com</p>
                  <p>Phone: +1234567890</p>
                  <i class="fas fa-envelope"></i> <i class="fas fa-phone"></i>
              </div>
              <div class="col-md-3">
                <h5 style={{color:'black'}}><b><i>Links</i></b></h5>
                <div><a href="#home" style={{color:'antiquewhite'}}>Home</a></div>
               <div> <a href="#about" style={{color:'antiquewhite'}}>About</a></div>
                <div><a href="#offer" style={{color:'antiquewhite'}}>Offer</a></div>
                <div><a href="#team" style={{color:'antiquewhite'}}>Team</a></div>
                <div><a href="#services" style={{color:'antiquewhite'}}>Services</a></div>

            </div>
            <div class="col-md-3">
                  <h5 style={{color: 'black'}}><b><i>Social Media</i></b></h5>
                  <p>Follow us:</p>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagramSquare />
              </div>
  

          </div>
      </div>
  </footer>


    </div>
  )
}

export default Footer
