import Logomark from '../assets/Images/Logomark.png'
import Avatar from '../assets/Images/Avatar.png'


const Testimonial = () => {
    return(
        <div style={{backgroundColor:"#F9FAFB",marginBottom:"100px",padding:"100px"}}>
        <center >
            <img src={Logomark}></img>
            <span style={{color:'#101828'}}>Sisyphus</span>
        
        <h2>We’ve been using Untitled to kick start every new <br></br>
            project and can’t imagine working without it.</h2>
           <img src={Avatar}></img><br></br>
           <span style={{color:"#101828"}}>Candice Wu</span><br></br>
           <span>Product Manager, Sisyphus</span>
        </center>

        </div>
    )
}

export default Testimonial