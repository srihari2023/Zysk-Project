import React from 'react'
import logo from '../../assets/Images/Logomark.png'
import mainlogo from '../../assets/Images/Main logo.png'

function Footer() {
  return (
    <div className='footer'>
       <center> <div className='mainfoot' >
            <h3>Start your free trial</h3>
            <p>Join over 4,000+ startups already growing with Untitled.</p>
            <div>
                <button id='fotbtn1' >Learn more</button>
                <button id='fotbtn2' >Get started</button>
            </div>
        </div>
        </center>
        <br></br>
        <div className='footers'>
       
        <div >
  <h5>Product</h5>
  <ul className="nav flex-column">
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        overview
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Features
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        solutions
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Tutorials
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        pricing
      </a>
    </li>
  </ul>
</div>
<div >
  <h5>company</h5>
  <ul className="nav flex-column">
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        About us
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Careers
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Press
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        News
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        media kit
      </a>
    </li>
  </ul>
</div>
<div >
  <h5>Resources</h5>
  <ul className="nav flex-column">
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Blog
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Newsletter
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Events
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Helpcenter
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Tutorials
      </a>
    </li>
  </ul>
</div>
<div >
  <h5>Use cases</h5>
  <ul className="nav flex-column">
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        starups
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Enterprise
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Government
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
         Saas center
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Marketplaces
      </a>
    </li>
  </ul>
</div>
<div >
  <h5>Social</h5>
  <ul className="nav flex-column">
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Twittter
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        LinkedIn
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Github
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Facebook
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        AngleList
      </a>
    </li>
  </ul>
</div>
<div >
  <h5>Legal</h5>
  <ul className="nav flex-column">
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Terms
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Privacy
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        Cookies
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        setting
      </a>
    </li>
    <li className="nav-item mb-2">
      <a href="#" className="nav-link p-0 text-body-secondary">
        taks
      </a>
    </li>
  </ul>
</div>
   </div>

   <br></br>
   <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
      >
        <svg className="bi" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <span><img src={mainlogo}></img><span>Untitled UI</span></span>
      
    </div>
    
    
  </footer>
 
</div>

<span className="mb-3 mb-md-0 text-body-secondary" id='fooo'>
        © 2077 Untitled UI, All rights reserve
      </span>
    </div>
  )
}

export default Footer
