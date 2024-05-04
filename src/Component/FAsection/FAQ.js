import React from 'react'
import avatar1 from "../../assets/Images/Avatar (1).png"
import avatar2 from "../../assets/Images/Avatar (2).png"
import avatar3 from "../../assets/Images/Avatar (3).png"

function FAQ() {
  return (
    <div className='FAQ'>
     <center> <h1>Frequently asked questions</h1>
      <p>Everything you need to know about the product and billing.</p></center>
      <div>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
  <h6 className="border-bottom pb-2 mb-0"></h6>
  <div className="d-flex text-body-secondary pt-3">
    
    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
      <div className="d-flex justify-content-between">
        <strong className="text-gray-dark">Is there any free trail available?</strong>
        
      </div>
      <span className="d-block">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized <br></br>
      30-minute onboarding call to get you up and running as soon as possible.</span>
    </div>
  </div>
  <div className="d-flex text-body-secondary pt-3">
    
    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
      <div className="d-flex justify-content-between">
        <strong className="text-gray-dark">can I change my plan later?</strong>
        
      </div>
      <span className="d-block"></span>
    </div>
  </div>
  <div className="d-flex text-body-secondary pt-3">
    
    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
      <div className="d-flex justify-content-between">
        <strong className="text-gray-dark">What is your cancellation property?</strong>
        
      </div>
      <span className="d-block"></span>
    </div>
  </div>
  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
      <div className="d-flex justify-content-between">
        <strong className="text-gray-dark">Can other info is added to invoice?</strong>
        
      </div>
      <span className="d-block"></span>
    </div>
  </div>
  <div className="d-flex text-body-secondary pt-3">
</div>
<div style={{margin:"20px",backgroundColor:"#F9F8FB",padding:"30px"}}>
<center><div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative',marginBottom:"20px" }}>
          <img src={avatar1} alt="avatar1" style={{ position: 'absolute', top: 0, left:'60px'}} />
          <img src={avatar2} alt="avatar2" style={{ marginLeft: '10px', marginRight: '10px' }} />
        </div>
        <img src={avatar3} alt="avatar3" style={{ position: 'absolute', marginLeft: '36px' }} />
</div>
<h6>Still have questions?</h6>
<p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
<button style={{backgroundColor:"#7F56D9",color:"white",borderRadius:"10px",padding:"7px"}}>Get in touch</button>
</center>
</div>
      </div>
    </div>
  )
}

export default FAQ
