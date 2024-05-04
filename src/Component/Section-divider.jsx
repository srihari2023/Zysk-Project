import coml from '../assets/Images/Fictional company logo.png'
import coml1 from '../assets/Images/Fictional company logo (1).png'
import coml2 from '../assets/Images/Fictional company logo (2).png'
import coml3 from '../assets/Images/Fictional company logo (3).png'
import coml4 from '../assets/Images/Fictional company logo (4).png'
import coml5 from '../assets/Images/Fictional company logo (5).png'



const SectionDivider = () => {
    return(
       <center><div>
        <br></br>
            <p>Join 4000+ companies already growining</p>
        <div className="d-flex gap-2 justify-content-center py-5">
         
  <span >
    <img
      className="rounded-circle me-1"
     
      src={coml}
      alt=""
    />
    Bolt Shift
  </span>
  <span >
    <img
      className="rounded-circle me-1"
      
      src={coml1}
      alt=""
    />
    LightBox
  </span>
  <span >
    <img
      className="rounded-circle me-1"
     
      src={coml2}
      alt=""
    />
   FeatherDev
  </span>
  <span >
    <img
      className="rounded-circle me-1"
      
      src={coml3}
      alt=""
    />
   Spherule
  </span>
  <span >
    <img
      className="rounded-circle me-1"
    
      src={coml4}
      alt=""
    />
    GlobalBank
  </span>
  <span >
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