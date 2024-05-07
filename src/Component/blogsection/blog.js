import React from 'react'
import image1 from "../../assets/Images/Image.png"
import Image2 from '../../assets/Images/Image (2).png'
import image3 from '../../assets/Images/Image (1).png'
import avatar1 from "../../assets/Images/Avatar (1).png"
import avatar2 from "../../assets/Images/Avatar (2).png"
import avatar3 from "../../assets/Images/Avatar (3).png"


function Blog() {
  return (
    <div>
        <div> 
            <p color='#6941C6'>Our blog</p>
            <h2>Lastest blog posts</h2>
            <p>Tool and strategies modern teams need to help their companies grow.</p>
            <button id='blogbtn1' >View all posts</button>
        </div>
        
        <div>
        <div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     <div className="col">
        <div className="card shadow-sm">
          <img src={image1}></img>
          <div className="card-body">
            <p>Design</p>
            <h5>UX review presentations</h5>
            <p className="card-text">
            How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
            <img src={avatar1}></img><span>Olivia Rhye</span><br></br><span>20 Jan 2024</span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img src={Image2}></img>
          <div className="card-body">
            <p>Product</p>
            <h5>Migrating to Linear 101</h5>
            <p className="card-text">
            Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
            </p>
            <img src={avatar2}></img><span>Olivia Rhye</span><br></br><span>20 Jan 2024</span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img src={image3}></img>
          <div className="card-body">
            <p>Software Engineering</p>
            <h5>Building your API stack</h5>
            <p className="card-text">
            The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
            </p>
            <img src={avatar3}></img><span>Olivia Rhye</span><br></br><span>20 Jan 2024</span>
          </div>
        </div>
      </div>
      
     
    
    </div>
  </div>
</div>

        </div>
      
    </div>
  )
}

export default Blog
