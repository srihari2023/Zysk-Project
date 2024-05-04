import React from 'react';
import mockup from "../../assets/Images/Screen mockup (REPLACE FILL).png";
import desk from "../../assets/Images/Mockup shadow.png";
import mobile from "../../assets/Images/Mockup wrap.png";
import mobilemock from "../../assets/Images/iPhone mockup.png";
import icon from '../../assets/Images/Featured icon.png'
import icon1 from '../../assets/Images/Featured icon (1).png'
import icon2 from '../../assets/Images/Featured icon (2).png'

function YourComponent() {
  return (
    <div>
     <center><div>
        <p style={{color:"#6941c6"}}>Features</p>
        <h2>Cutting-edge features for advanced analytics</h2>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p>
      </div></center>

      <div className='mobile'>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={desk} className='desk'style={{ position: 'absolute', top: '65px', left:'350px',width:"865px" }} alt="mockup" />
          <img src={mockup}  className='mocks'style={{ position: 'absolute', top: '100px', left: '400px' }} alt="desk" />
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={mobile} className='mobile'style={{ position: 'absolute', top:'155px', left: '360px' }} alt="mobile" />
          <img src={mobilemock} className='mobilemock'style={{ position: 'absolute', top: '150px', left: '350px' }} alt="mobilemock" />
        </div>
      </div>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3"style={{position:"relative",top:"700px"}}>
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
