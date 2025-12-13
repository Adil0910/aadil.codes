import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <section className="contact-wrapper">
      <div className="contact-box">
          <div className="bubble-bg">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>

        {/* LEFT */}
        <div className="contact-left">
          <h1 style={{color:"black"}}>Let’s Build Something Together</h1>
          <p className="subtitle">
            I’m available for a <span>full-time</span> Full Stack Developer role.
          </p>
<div className="social-row" role="navigation" aria-label="Social links">
              <a href="https://instagram.com" className="social-btn instagram" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://linkedin.com" className="social-btn linkedin" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="https://github.com" className="social-btn github" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://youtube.com" className="social-btn youtube" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          <div className="info">
            <p><i class="fa-solid fa-g hh"></i> aadilehtesham63@gmail.com</p>
            <p><i class="fa-solid fa-mobile hh"></i> 7890332927</p>
            <p><i className="fas fa-location-dot hh"></i>India</p>
          </div>


          <div className="status">🟢 Open for Full-Time</div>
        </div>

        {/* RIGHT */}
        <form className="contact-right">
          <h3>Contact Me</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Hire Me</button>
        </form>

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
