import React from 'react'
import './Page.css'

function Book() {
  return (
    <div>
      <section class="book" id="book">

      <div class="heading">
            <h1><span>B</span>ook</h1>
        </div>
    <div class="container" style={{maxWidth:'1400px',width:'70%',margin:'0 auto'}}>
        
        <div class="row">
            <div class="col-md-6 py-3 py-md-0">
                <div class="card">
                    <img src="images/book.jpeg" class="img-fluid" alt="..."/>
                </div>
            </div>
            <div class="col-md-6 py-3 py-md-0">
                <form action="#">
                    <input type="text" class="form-control mb-3" placeholder="Where To" required />
                    <input type="text" class="form-control mb-3" placeholder="How Many" required />
                    <input type="date" class="form-control mb-3" placeholder="Arrival Date" required />
                    <input type="date" class="form-control mb-3" placeholder="Leaving Date" required />
                    <textarea class="form-control mb-3" placeholder="Enter your Details" name="text" rows="4" required></textarea>
                    <input type="submit" class="btn btn-primary" value="Book Now" />
                </form>
            </div>
        </div>
    </div>
</section>


    </div>
  )
  
}

export default Book
