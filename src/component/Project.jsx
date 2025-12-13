import React from "react";
import Footer from "./Footer";

function Project() {
  const projects = [
    {
      title: "Blog Website",
      desc: "A modern blog website built using React and Firebase.",
      img: "/img/blog.png",
      link: "https://your-blog-link.com",
      tech: ["React", "Redux", "CSS"]
    },
    {
      title: "E-Commerce Website",
      desc: "Fully responsive e-commerce store with cart functionality.",
      img: "/img/ecommerce.png",
      link: "https://your-ecommerce-link.com",
      tech: ["React", "Node", "MongoDB"]
    },
    {
      title: "My Kitchen App",
      desc: "Recipe search and cooking guide with API integration.",
      img: "/img/mykitchen.png",
      link: "https://your-kitchen-app.com",
      tech: ["React", "API", "Css"]
    },
        {
      title: "Headphone Website",
      desc: "A modern blog website built using React and Firebase.",
      img: "/img/realme.png",
      link: "https://your-blog-link.com",
      tech: ["HTML", "GSAP", "CSS"]
    },
    {
      title: "Hair salon Website",
      desc: "Fully responsive e-commerce store with cart functionality.",
      img: "/img/hair.png",
      link: "https://your-ecommerce-link.com",
      tech: ["HTML", "CSS", "JAVA SCRIPT"]
    },
    {
      title: "Bar Website",
      desc: "Recipe search and cooking guide with API integration.",
      img: "/img/bar.png",
      link: "https://your-kitchen-app.com",
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

            <h3>{p.title}</h3>

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
