import React from "react";
import headimage from '../../assets/Images/head-image.png'



const HeaderSection = () => {
    return(
        <center><div>
            <div id="head-top">
  <span id="head-text">New feature</span>  
  <div>
    <span >check out the team dashboard</span>
  </div>
</div>
<h1 className="h11" >Beautiful analytics to grow smarter</h1>
    <p id="ptag">powerful,self-serve product and growth analytics to help  you convert,engage,<br></br>
                and retain more user.Trustedby over 4,000 startups.</p>
            <button id="btn1" >Demo</button>
            <button id="btn2" >sign up</button>
            <div className="image1">
              <center><img className="img1" src={headimage} ></img></center>
            </div>
        </div>
        </center>
    )
}
 export default HeaderSection