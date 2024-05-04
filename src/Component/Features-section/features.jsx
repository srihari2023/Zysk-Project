import icon from '../../assets/Images/Featured icon.png'
import icon1 from '../../assets/Images/Featured icon (1).png'
import icon2 from '../../assets/Images/Featured icon (2).png'
import icon3 from '../../assets/Images/Featured icon (3).png'
import icon4 from '../../assets/Images/Featured icon (4).png'
import icon5 from '../../assets/Images/Featured icon (5).png'


const Features = () => {
    return(
        <>
      <center>
       <span style={{color:"#6941C6"}}>Features</span> 
        <h1>Analytics that feels like its from the future</h1>
          <p>Powerful, self-serve product and growth analytics to help you convert,engage,<br></br> 
            and retain more users. Trusted by over 4,000 startups.</p>
<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
  <div className="feature col">
    <div >
       <img src={icon}></img>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>
      Paragraph of text beneath the heading to explain the heading. We'll add
      onto it with another sentence and probably just keep going until we run
      out of words.
    </p>
  </div>
  <div className="feature col">
    <div >
      <img src={icon1}></img>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>
      Paragraph of text beneath the heading to explain the heading. We'll add
      onto it with another sentence and probably just keep going until we run
      out of words.
    </p>
  </div>
  <div className="feature col">
    <div >
      <img src={icon2}></img>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>
      Paragraph of text beneath the heading to explain the heading. We'll add
      onto it with another sentence and probably just keep going until we run
      out of words.
    </p>
  </div>
</div>

<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
  <div className="feature col">
    <div >
      <img src={icon3}></img>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>
      Paragraph of text beneath the heading to explain the heading. We'll add
      onto it with another sentence and probably just keep going until we run
      out of words.
    </p>
  </div>
  <div className="feature col">
    <div >
     <img src={icon4}></img>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>
      Paragraph of text beneath the heading to explain the heading. We'll add
      onto it with another sentence and probably just keep going until we run
      out of words.
    </p>
  </div>
  <div className="feature col">
    <div >
     <img src={icon5}></img>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>
      Paragraph of text beneath the heading to explain the heading. We'll add
      onto it with another sentence and probably just keep going until we run
      out of words.
    </p>
  </div>
</div>


</center>

        </>
    )
}
export default Features