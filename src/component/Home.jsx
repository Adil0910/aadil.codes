import React from "react";
import Fadewords from "./Fadewords";
import Footer from "./Footer";
import projects from "../data/project";
import skills from "../data/skill";
function Home() {
  
  return (
    <>
    {/* 

        <div className="box1">
          <div className="items" style={{ width: "79%" }}>
            
            <div className="location">
              <h3 className="headlocation">Deoria , Uttar Pradesh</h3>
            </div>

           
            <Fadewords
              text="Hi, I’m Adil Ehtesham, a Full Stack Developer passionate about building modern web applications."
              className="Intro"
            />

            <div className="buttonbox">
              <button className="btn">Hire Me</button>
            </div>
          </div>
        </div>

        <div className="box1s">
          <img className="image" src="img/img1.jpg" />
        </div> */}
        <div className="bubble-bg">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>
      <div className="hero">
<div className="text-hero">DEVELOPER</div>

      <div className="text-img">
        <img className="text-png" src="img/imgbg.png"/>
      </div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="main-scroll">
        
        {/* PAGE 2 */}
        <section className="page page2">
          <div className="projects-page">
      <h2 className="heading-home-wroks">My Works</h2>

      <div className="project-container">
        {projects.slice(0,3).map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.img} alt={p.title} className="project-img" />

            <h3 className="project-header-new">{p.title}</h3>

            <div className="tech-list">
              {p.tech.map((t, i) => (
                <span className="tech" key={i}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
        </section>
      </div>



      <section className="new-about">
        <div className="bubble-bg">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>
          <div className="box1-abnew">
            <img className="new-im-about" src="img/imgbg.png"/>
          </div>
          <div className="box1-abnew-2">
            <div>
              <h1 className="new-heading-ab">ABOUT</h1>
              <h4 className="new-h3-ab">ME</h4>
            </div>
            <div className="blank"></div>
            <div className="summary">
              <p>Full Stack MERN Developer with 6 months  of professional experience building and shipping production-grade web applications. Worked at Infoseek Software Systems where I delivered real-world features used by live users — from secure JWT authentication flows to Razorpay payment integrations and role-based access control systems.</p>
            </div>
            <div className="education-new">
              <h1 className="edu-txt">EDUCATION</h1>
              <h3 className="ab-new-h3">BCA - Persent   - Manipal Univercity Jaipur</h3>
              <h3 className="ab-new-h3">BA - Passing Year -2024     - Deen Dayal Upadhyay</h3>
            </div>
              <div className="skills-new">
             
              <div className="cnt-lang">
                   <div className="contact-new">
              <h1 className="edu-txt">Contact</h1>
               <div className="social-row" role="navigation" aria-label="Social links">
              <a href="https://www.instagram.com/adil09__?igsh=aGxhYXBjbWFuYWI5" className="social-btn instagram" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://linkedin.com/in/adil-ehtesham-3919a5309/" className="social-btn linkedin" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="https://github.com/Adil0910" className="social-btn github" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://youtube.com/@jixxyjod9?si=QG8acoqQCa7T7ujK" className="social-btn youtube" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>

              
            </div> <div className="language-new">
              <h1 className="edu-txt">LANGUAGE</h1>
              <h3 className="ab-new-h3">HINDI -  English</h3>
            </div>
                </div>
            </div>
          </div>

        </section>


<section className="Skills-new">
  <video
    className="video1"
    src="/img/whitebg.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  <div className="bubbles">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bubble"
        style={{
          left: `${Math.random() * 90}%`,
          animationDuration: `${8 + Math.random() * 6}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      >
        <img className="bubble-img" src={skill} alt="" />
      </div>
    ))}
  </div>

 
</section>


      <Footer/>
    </>
  );
}

export default Home;
