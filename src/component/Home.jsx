import React from "react";
import Fadewords from "./Fadewords";
import Footer from "./Footer";
function Home() {
  
  return (
    <>
      <div className="hero">

        <div className="bubble-bg">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>

        <div className="box1">
          <div className="items" style={{ width: "79%" }}>
            
            <div className="location">
              <h3 className="headlocation">Deoria , Uttar Pradesh</h3>
            </div>

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
        </div>
      </div>

      {/* SCROLL CONTENT */}
      <div className="main-scroll">
        
        {/* PAGE 2 */}
        <section className="page page2">
          
          <div className="section-container">

            {/* LEFT IMAGE */}
            
            <div className="image-box">
              <img src="/img/lulu.jpg" alt="Profile" className="profile-pic" />
            </div>

            {/* RIGHT TEXT */}
            <div className="content-box">
              <h2 className="section-title">
                
                <span className="abborders">Abo</span>ut Me
              </h2>
<p className="section-text">
  Hi, I’m <strong>Aadil Ehtesham</strong>, a motivated <strong>Full Stack Developer </strong>
   with 8 months experience in building scalable and user-centric web applications.
  I’m currently pursuing <strong>BCA (3rd Semester)</strong> and have completed my
  <strong> B.A</strong>.
</p>

<p className="section-text">
  I am a <strong>Full Stack Developer</strong> with hands-on experience in the
  <strong> MERN Stack</strong>, focused on building scalable and real-world
  applications using modern development practices.
</p>


<p className="section-text">
  With <strong>20+ completed projects</strong>, clean coding standards, and a continuous learning mindset to every
  project I work on.
</p>


              <div className="buttonbox">
                 <a className="btnss" href="/img/adilcv.pdf">Download Resume</a>
                 <a className="btns" href="/img/Certificate.jpeg">Certificate</a>

              </div>
            </div>
          </div>
        </section>

        {/* PAGE 3 */}
        <section className="page sticky">
       <section className="mentor-section">
  <h2 className="mentor-title">
    What <span>My Mentors</span> Say
  </h2>

  <div className="mentor-wrapper">

    {/* Mentor 1 */}
    <div className="mentor-card">
      <div className="mentor-image">
        <img src="/img/samarmam.jpeg" alt="Mentor 1" />
      </div>

      <div className="mentor-content">
        <p>
          “Adil is a highly dedicated student. He learns concepts quickly 
          and applies them in real projects with confidence. His growth 
          in MERN Stack is impressive.”
        </p>
        <h3 className="mentor-name">— Samar Malik</h3>
        <h4 className="mentor-role">Senior MERN Instructor</h4>
      </div>
    </div>

    {/* Mentor 2 */}
    <div className="mentor-card">
      <div className="mentor-image">
        <img src="/img/abhisheksir.jpeg" alt="Mentor 2" />
      </div>

      <div className="mentor-content">
        <p>
          “He has strong logic-building skills and a great sense of UI/UX.  
          Adil’s passion for full stack development will take him far in his career.”
        </p>
        <h3 className="mentor-name">— Abhishek Sir</h3>
        <h4 className="mentor-role">Full Stack Trainer</h4>
      </div>
    </div>

  </div>
</section>

        </section>

        {/* PAGE 4 */}
        <section style={{background:"white"}} className="page sticky">
          <h1 className="lastpara">“Code with purpose. Build with passion.”</h1>
          
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
