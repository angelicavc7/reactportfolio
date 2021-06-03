import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Angelica Villar
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/aboutMe"
              className={ window.location.pathname === "/" || window.location.pathname === "/aboutMe"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={window.location.pathname === "/Resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
);
}

export default Navbar;