import "./Header.css";
import fiabciLogo from "../../assets/faibciLogo.webp";

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={fiabciLogo} alt="fiabci logo" className="img-fluid" />
      </div>
      <ul className="linkGroup">
        <li className="linkItem">
          <a href="#" className="link">
            About Us
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Agenda
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Speakers
          </a>
        </li>
        <li className="linkItem">
          <a href="#" className="link">
            Sponsors
          </a>
        </li>
      </ul>
      <a href="#" className="navbarRegisterButton">
        Get Ticket
      </a>
    </nav>
  );
};

export default Navbar;
