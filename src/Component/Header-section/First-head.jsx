import React from "react";
import headimage from '../../assets/Images/head-image.png'



const HeaderSection = () => {
    return(
        <center><div>
            <div style={{display:"flex",justifyContent:"center",border:"1px solid #E9D7FE",width:"350px",borderRadius:"10px",backgroundColor:"#E9D7F9"}}>
  <span style={{border:"1px solid #D6BBFB",borderRadius:"10px",padding:"2px",marginRight: "5px",backgroundColor:"#F9F5FF"}}>New feature</span>  
  <div>
    <span >check out the team dashboard</span>
  </div>
</div>

                <h1 className="h11" style={{fontSize:'60px'}}>Beautiful analytics to grow smarter</h1>
                <p style={{fontSize:'20px'}}>powerful,self-serve product and growth analytics to help  you convert,engage,<br></br>
                and retain more user.Trustedby over 4,000 startups.</p>
            <button style={{backgroundColor:"#FFFFFF",color:"black",width:'90px',margin:"10px",borderRadius:'8px',padding:'7px',marginBottom:"50px"}}>Demo</button>
            <button style={{backgroundColor:"#7F56D9",color:"white",width:'90px',borderRadius:'8px',padding:'7px'}}>sign up</button>
            <div className="image1" style={{width:'300px'}}>
              <center><img className="img1" src={headimage} ></img></center>
            </div>
        </div>
        </center>
    )
}
 export default HeaderSection