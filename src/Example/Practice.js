import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



function Practice() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark mt-2" aria-label="nav">
        <div class="container">
          <div class="col-md-3">
            <img src="/images/cake.webp" class="card-img-top" alt="n1" style={{width: '50px', height: '50px',borderRadius: '50%', backgroundColor: '#333' }}/>
            <a class="navbar-brand" style={{color: 'antiquewhite', fontWeight: 'bold',fontStyle: 'italic',fontFamily: 'Arial, Helvetica, sans-serif'}}>Cake Shop
          </a>
          </div>
          <div class="icons " style={{color: 'antiquewhite'}}>
            <FaShoppingCart style={{marginRight:'10px'}} />
            <FaSearch />
          </div>

         
          

        </div>

    </nav>

      <div class="container mt-5">
      <div class="row">


      <div class="col-md-6 mt-3" >
            <div class="card">
                <img src="/images/c1.webp" class="card-img-top " width="50" height="500" alt="c1" style={{width:'500px',height:'500px',borderRadius:'50%',marginLeft:'3%',marginTop:'2%'}}/>
                <div class="card-body">
                    <h5 class="card-title">Birthday Cake</h5>
                    <p class="card-text">This is a sample of birthday cake.</p>
                </div>
            </div>
        </div>


        <div class="col-md-6 mt-3">
          <div class="card">
              <img src="/images/c2.webp" class="card-img-top" width="50" height="500" alt="c2" style={{width:'500px',height:'500px',borderRadius:'50%',marginLeft:'3%',marginTop:'2%'}}/>
              <div class="card-body">
                  <h5 class="card-title">Chocolate Cake</h5>
                  <p class="card-text">This is a sample of chocolate cake.</p>
              </div>
          </div>
      </div>


        
      <div class="col-md-6 mt-3" >
        <div class="card">
            <img src="/images/c3.webp" class="card-img-top" width="50" height="500" alt="c3"style={{width:'500px',height:'500px',borderRadius:'50%',marginLeft:'3%',marginTop:'2%'}}/>
            <div class="card-body">
                <h5 class="card-title">Strawberry Cake</h5>
                <p class="card-text">This is a sample of strawberry cake.</p>
            </div>
        </div>
    </div>
  


  <div class="col-md-6 mt-3" >
    <div class="card">
        <img src="/images/c4.webp" class="card-img-top" width="50" height="500" alt="c4"style={{width:'500px',height:'500px',borderRadius:'50%',marginLeft:'3%',marginTop:'2%'}}/>
        <div class="card-body">
            <h5 class="card-title">Pastry Cake</h5>
            <p class="card-text">This is a sample of pastry cake.</p>
        </div>
    </div>
</div>



  </div>


    </div>
    </div>
    
  )
}

export default Practice
