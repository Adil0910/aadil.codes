import React from "react";
import "./About.css";
import Footer from "./Footer";

function About() {

  const galleryImages = [
        "img/img1.jpg",
    "img/Image9p.png",
    "img/lulu.jpg",
    "img/Image7p.png",
   
 
   
  ];

  return (
    <>
    <div className="about">
      
        <div className="bubble-bg">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>

      {/* ABOUT SECTION */}
      <div className="about-container">

        {/* IMAGE */}
        <h1 className="haedimg" style={{display:"none"}}>Welcome</h1>
        <div className="about-img">
          <img src="img/Image9p.png" alt="profile" />
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <h2> <span className="abborder">Abo</span>ut Me</h2>
<p>
  Hi, I’m <span>Adil Ehtesham</span>, a Full Stack Developer with strong hands-on
  experience in building scalable, high-performance web applications. I have
  completed intensive professional training and am currently working
  as a Full Stack Developer.
</p>

<p>
  I specialize in the MERN Stack and have successfully delivered 20+ real-world
  projects, focusing on clean architecture, optimized performance, and great
  user experience. I’m highly motivated, quick to learn, and passionate about
  turning complex ideas into reliable digital products.
</p>


          <div className="about-details">
            <p><strong>Age:</strong> 22</p>
            <p><strong>Experience:</strong> 1 Year</p>
            <p><strong>Role:</strong> Full Stack Developer</p>
            <p><strong>Location:</strong> India</p>
          </div>

          <a href="/img/adilcv.pdf" className="about-btn">Download Resume</a>

        </div>
      </div>

      {/* SKILLS SECTION */}
      <h2 className="skills-heading"><span style={{borderBottom:"3px solid",paddingBlock:"7px",}}>Skil</span>ls</h2>

      <div className="skills-grid">
        <div className="skills-cards">
       <div className="skill-card">
          <h2 className=" headdd">Language <i class="fa-solid fa-desktop"></i></h2>
          <p>JAVA SCRIPT</p>
        </div>
        <div className="skill-card">
          <h2 className=" headdd">Frontend <i class="fa-brands fa-react"></i></h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVA SCRIPT</p>
          <p>REACT</p>
          <p>Bootstrap</p>
          <p>TanStack</p>

        </div>
           <div className="skill-card">
          <h2 className=" headdd">App <i class="fa-brands fa-react"></i></h2>
          <p>React-Native (Expo)</p>
          <p>TypeScript</p>
        </div>

        <div className="skill-card">  <h2 className=" headdd">Backend <i class="fa-solid fa-database"></i></h2>
        <p>NODE.JS</p>
        <p>EXPRESS.JS</p>
        

        </div>
        <div className="skill-card"><h2 className=" headdd">DataBase</h2>
        <p>MongoDB</p>
        <p>Mongoose</p>

        
        </div>
         <div className="skill-card"><h2 className=" headdd">Integration & Services</h2>
        <p className="paraaa">Nodemailer,Brevo (SendinBlue)</p>
        <p>multer</p>
        <p>razorpay</p>
        <p>jwt,bcrypt</p>
        
        </div>
         <div className="skill-card"><h2 className=" headdd">Tool & Platforms</h2>
       <p>Git</p>
       <p>GitHub</p>
       <p>Postman</p>
       <p>VsCode</p></div>

        
        </div>
          
          
      </div>

      {/* ⭐ GALLERY SECTION ⭐ */}
      <h2 className="gallery-heading"><span className="gg">My Gal</span>lery</h2>

      <div className="gallery-grid">
        {galleryImages.map((src, i) => (
          <div className="gallery-card" key={i}>
            <img src={src} alt="gallery" />
            <div className="overlay">
            </div>
          </div>
        ))}
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default About;
