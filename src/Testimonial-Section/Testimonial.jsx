import Logomark from "../assets/Images/Logomark.png";
import Avatar from "../assets/Images/Avatar.png";

const Testimonial = () => {
  return (
    <div className="Testimonial-Section">
    <div className="Testimonial-Container">
      <div className="mx-auto">
        <img src={Logomark}></img>
        <span style={{ color: "#101828" }}>Sisyphus</span>
      </div>
      <div className="mx-auto testimonila-text">
        <p> 
          We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
      </div>
      <div className="mx-auto Testimonial-Avatar-text">
        <div className="text-center" >
          <img src={Avatar}></img>
        </div>
        <div className="text-center">
        <p className="m-0" style={{ color: "#101828" }}>Candice Wu</p>
        <p className="m-0">Product Manager, Sisyphus</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
