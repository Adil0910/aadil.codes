import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fadewords from "./Fadewords";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <h1 className="Port">Portfolio</h1>
       <p> ☰ </p>
      </div>

      <nav className={open ? "show" : ""}>
        <h1 className="Ports">Portfolio</h1>

        <div className="navitem">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/qualification">Qualification</Link>
        <Link to="/contact">Contact</Link></div>
      </nav>
   </>
  );
}

export default Navbar;
