import coml from '../assets/Images/Logomark (1).png'
import coml1 from '../assets/Images/Logomark (2).png'
import coml2 from '../assets/Images/Logomark (3).png'
import coml3 from '../assets/Images/Logomark (4).png'
import coml4 from '../assets/Images/Logomark (5).png'
import coml5 from '../assets/Images/Logomark (6).png'




const SectionDivider = () => {
    return(
       <center><div>
        <br></br>
            <p>Join 4000+ companies already growining</p>
        <div  id='midcontent'>
         
  <span className='secdiv' >
    <img
      className="rounded-circle me-1"
      src={coml}
      alt=""
    />
   BoltShift
  </span>
  <span className='secdiv'  >
    <img
      className="rounded-circle me-1"
      
      src={coml1}
      alt=""
    />
   LightBox
  </span>
  <span className='secdiv'  >
    <img
      className="rounded-circle me-1"
     
      src={coml2}
      alt=""
    />
  FeatherDev
  </span>
  <span className='secdiv'  >
    <img
      className="rounded-circle me-1"
      
      src={coml3}
      alt=""
    />
  Spherule
  </span>
  <span  className='secdiv' >
    <img
      className="rounded-circle me-1"
    
      src={coml4}
      alt=""
    />
  GlobalBank
  </span>
  <span className='secdiv'  >
    <img
      className="rounded-circle me-1"
    
      src={coml5}
      alt=""
    />
   NietZsche
  </span>
  
</div>
</div>
</center>

    )
}

export default SectionDivider