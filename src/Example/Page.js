import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Page.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoFlower } from "react-icons/io5";


function Page() {
  return (
<div>
       
  <nav class="navbar navbar-expand-lg bg-dark mt-2 ">
    <div class="container-fluid">
      <IoFlower style={{color:'white',fontSize:'50px', marginRight:'20px'}}/>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#carouselExample" 
                style={{color:'white',fontWeight:'bold',fontStyle:'italic'}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" 
               style={{color:'white',fontWeight:'bold',fontStyle:'italic'}}>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services" 
               style={{color:'white',fontWeight:'bold',fontStyle:'italic'}}>Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#book" 
               style={{color:'white',fontWeight:'bold',fontStyle:'italic'}}>Book</a>
          </li>
          <li class="nav-item">
             <a class="nav-link" href="#team" 
                style={{color:'white',fontWeight:'bold',fontStyle:'italic'}}>Team</a>
         </li>
        </ul>
       <div class="icons">
        <FaShoppingCart style={{ color:'white',marginRight:'10px'}} />
        <FaSearch style={{ color:'white'}}/>
       </div>
      </div>
   </div>
</nav>


<div id="carouselExample" class="carousel slide mt-2">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/i1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/i2.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/i3.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




</div>
  )
}

export default Page
