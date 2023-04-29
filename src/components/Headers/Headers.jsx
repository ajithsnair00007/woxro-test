import React from 'react'
import './Headers.css'




function Headers() {
  return (
    <div className='main-body'>
        <div className='nav1'>
            
        <nav className="navbar navbar-dark-sm  bg-dark" >
            
          <a id='nav1' className='nav-link' href=" "><b>Now Hiring : </b> Looking for a job in Full Stack Development? </a> 
         
          
          <div className='icon' >
            <a href=" " style={{color:'white'}}>
          <i id='nav-link'  className="fas fa-phone" aria-hidden="true"><strong style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'14px'}}>&nbsp;&nbsp;+91 487 2080 212</strong></i>
               &nbsp;&nbsp;</a>
            <i className="fas fa-map-marker-alt" aria-hidden="true"><span style={{fontFamily:'sans-serif',fontWeight:'normal',fontSize:'14px'}}>&nbsp;&nbsp;Leshore Business Park, Thrissur</span></i>
          </div>
          
          
          
        </nav>
        </div>
        

        <div className='nav2'>
<nav className="navbar navbar-light navbar-toggler" >
<img src="https://woxro.com/public/assets/png/woxrologo.png" width="205.875" height="56" alt="woxro"></img>
<button id='navbutton' className="navbar-toggler" type="button"   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>
       </div>
       
       <div className='nav3'>

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    
    <button id='navbutton' className="navbar-toggler" type="button"   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav w-100 justify-content-around">
      <li >
      <a className="nav-link" href=" " style={{color:'white', fontSize:"18px"}} >Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=" " style={{color:'white',fontSize:"18px" }} >About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=" " style={{color:'white', fontSize:"18px"}}>Services</a>
      </li>
      <li className="nav-item">
        <a className='nav-link' href=" " style={{color:'white', fontSize:"18px"}}>Technology</a>
      </li>
      <li >
        <a className="nav-link" href=" " style={{color:'white', fontSize:"18px"}}>Careers </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=" " style={{color:'white', fontSize:"18px"}}>Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=" " style={{color:'white', fontSize:"18px"}}>Our Works</a>
      </li>
      <li className="nav-item">
        <a className='nav-link' href=" " style={{color:'white', fontSize:"18px"}}>Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    <div style={{textAlign:'center'}} className='middle'>
      <div>
      <h1 className='head'>Kerala's Leading Web <br /> Design Company</h1> 
      </div>
      <br />
      <div>
      <p className='para'>Global Web Designing Company That Provides Full-cycle Software Developement Services,E-<br />
      commerce & Mobile App Developement Services</p>
      </div>
    </div>
    </div>
    
  )
}

export default Headers
