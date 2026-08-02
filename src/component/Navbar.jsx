import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fadewords from "./Fadewords";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    

      <nav>
        <h1 className="Ports">AE</h1>


        <a href="img/adilcv.pdf" className="Resume-button" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </nav>
   </>
  );
}

export default Navbar;
