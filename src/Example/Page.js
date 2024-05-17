import React from 'react'



function Page() {
  return (
    <div>
       {/* <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </a>
  </div>
</nav> */}

    {/* <div class="container-image">
        <img src="/images/w1.webp" alt='w1' width={'1500px'} height={'500px'}/>
    </div> */}
    <nav class="navbar navbar-expand-lg bg-primary mt-2 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#team">Team</a>
        </li>
       </ul>
      
    </div>
  </div>
</nav>

  

    </div>
  )
}

export default Page
