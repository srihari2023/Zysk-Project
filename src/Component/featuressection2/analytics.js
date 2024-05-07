import React from 'react';
import mockup from "../../assets/Images/Screen mockup (REPLACE FILL).png";
import desk from "../../assets/Images/Mockup shadow.png";
import mobile from "../../assets/Images/Mockup wrap.png";
import mobilemock from "../../assets/Images/iPhone mockup.png";
import icon from '../../assets/Images/Featured icon.png'
import icon1 from '../../assets/Images/Featured icon (1).png'
import icon2 from '../../assets/Images/Featured icon (2).png'
import content from '../../assets/Images/Content (2).png'

function YourComponent() {
  return (
    <div>
     <center><div className='cuttingedge'>
        <span style={{color:"#6941c6",border:"1px solid black",borderRadius:"7px",backgroundColor:"#F9F5FF",color:"violet",fontSize:"15px",padding:"0px 10px",marginBottom:'10%'}} id='fee'>Features</span>
        <h2 className='cut'>Cutting-edge features for advanced analytics</h2>
        <p className='cutp'>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
      </div></center>
        <div className='analytics' >
         <img src={content} className='imagess'></img>
        </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3"style={{position:"relative",top:"-100px",marginLeft:'10px'}}>
        <div className="feature col">
         <center>
          <div >
           <img src={icon}></img> 
          </div>
          <h3 className="fs-2 text-body-emphasis">Share team inboxes</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add
            onto it with another sentence and probably just keep going until we run
            out of words.
          </p>
          <a href="#" className="icon-link">
            Learn More
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </center>
        </div>
        <div className="feature col">
          <center>
          <div >
           <img src={icon1}></img>
          </div>
          <h3 className="fs-2 text-body-emphasis">Deliver Instant answers</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add
            onto it with another sentence and probably just keep going until we run
            out of words.
          </p>
          <a href="#" className="icon-link">
          Learn More
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </center>
        </div>
        <div className="feature col">
          <center>
          <div >
           <img src={icon2}></img>
          </div>
          <h3 className="fs-2 text-body-emphasis">Manage your team with reports</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add
            onto it with another sentence and probably just keep going until we run
            out of words.
          </p>
          <a href="#" className="icon-link">
          Learn More
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </center>
        </div>
      </div>

      
    </div>
  );
}

export default YourComponent;
