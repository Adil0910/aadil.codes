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
            Hi, I’m <span>Adil Ehtesham</span>, a Full Stack Developer passionate
            about building beautiful and scalable web applications. I love writing
            clean code and creating smooth user experiences.
          </p>

          <p>
            I work with MERN Stack and enjoy turning ideas into real world digital
            products. Learning something new daily is my biggest strength.
          </p>

          <div className="about-details">
            <p><strong>Age:</strong> 22</p>
            <p><strong>Experience:</strong> Fresher</p>
            <p><strong>Role:</strong> Full Stack Developer</p>
            <p><strong>Location:</strong> India</p>
          </div>

          <a href="/img/ADILEHTESHAMCV.pdf" className="about-btn">Download Resume</a>

        </div>
      </div>

      {/* SKILLS SECTION */}
      <h2 className="skills-heading"><span style={{borderBottom:"3px solid",paddingBlock:"7px",}}>Skil</span>ls</h2>

      <div className="skills-grid">
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
        </div>
        <div className="skill-card">  <h2 className=" headdd">Backend <i class="fa-solid fa-database"></i></h2>
        <p>NODE.JS</p>
        <p>EXPRESS.JS</p>

        </div>
        <div className="skill-card"><h2 className=" headdd">DataBase</h2>
        <p>MongoDB</p>
        
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
