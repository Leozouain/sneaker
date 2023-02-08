import React from "react";

export default function Navbar () {
  return (
    // <section className="container d-flex bg-dark text-white" style={{width:"80vw"}}>
    //   <nav className="">
    //     Logo
    //   </nav>
    //   <div className="d-flex justify-content-end ">
    //     <p>About us</p>
    //     <p>Mission</p>
    //     <p>Vision</p>
    //     <p>Contact us</p>

    //   </div>
    // </section>
    <>

<nav className=" navbar  navbar-expand-xl bg-white container  " style={{ backgroundColor:'white'}} >
  <div className="container-fluid bg-white">
    <a className="navbar-brand w-75 d-flex" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    
    </>
  );
}
