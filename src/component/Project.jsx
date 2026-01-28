import React from "react";
import Footer from "./Footer";

function Project() {
  const projects = [
     {
      title: "Portfolio Generator",
      desc: "A dynamic portfolio generator that automatically creates a personalized portfolio from user input",
      img: "/img/portfoliogen.png",
      link: "https://your-portfolio-iota.vercel.app/",
      tech: ["Frontend", "Brevo", "Backend"]
    },
      {
      title: "Hospital Management System",
      desc: "A Hospital Management System with role-based access, doctor approval by admin, and email notifications for seamless hospital operations.",
      img: "/img/linkedin5.png",
      link: "https://hms-alpha-neon.vercel.app/",
      tech: ["Frontend", "Backend", "Nodemailer"]
    },
     
      {
      title: "Blog ",
      desc: "Nexo is a full-featured blog application built with complete CRUD functionality, enabling users to manage blog content efficiently.",
      img: "/img/blogcrud.png",
      link: "https://blog-site-frontend-pearl.vercel.app/",
      tech: ["Frontend", "CRUD", "Backend"]
    },
    {
      title: "Blog Website",
      desc: "A modern blog website built using React and Firebase.",
      img: "/img/blog.png",
      link: "http://blog-site-iota-gules.vercel.app",
      tech: ["React", "Redux", "CSS"]
    },
    {
      title: "E-Commerce Website",
      desc: "Fully responsive e-commerce store with cart functionality.",
      img: "/img/ecommerce.png",
      link: "",
      tech: ["React", "Node", "MongoDB"]
    },
    {
      title: "My Kitchen App",
      desc: "Recipe search and cooking guide with API integration.",
      img: "/img/mykitchen.png",
      link: "https://my-kitchen-blush.vercel.app/",
      tech: ["React", "API", "Css"]
    },
        {
      title: "Headphone Website",
      desc: "A modern blog website built using React and Firebase.",
      img: "/img/realme.png",
      link: "https://adil0910.github.io/Headphone-site-Clone/",
      tech: ["HTML", "GSAP", "CSS"]
    },
    {
      title: "Hair salon Website",
      desc: "Fully responsive e-commerce store with cart functionality.",
      img: "/img/hair.png",
      link: "https://adil0910.github.io/Hair-Salon-Clone/",
      tech: ["HTML", "CSS", "JAVA SCRIPT"]
    },
    {
      title: "Bar Website",
      desc: "Recipe search and cooking guide with API integration.",
      img: "/img/bar.png",
      link: "https://adil0910.github.io/Bar/",
      tech: ["HTML", "CSS" ]
    }
  ];

  return (
    <>
    <div className="projects-page">
      <h2 className="heading">My Projects</h2>

      <div className="project-container">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.img} alt={p.title} className="project-img" />

            <h3 className="project-header">{p.title}</h3>

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
    <Footer/>
    </>
  );
}

export default Project;
