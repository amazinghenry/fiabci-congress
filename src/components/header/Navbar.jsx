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
          <a href="#about" className="link">
            About Us
          </a>
        </li>
        <li className="linkItem">
          <a href="#agenda" className="link">
            Agenda
          </a>
        </li>
        <li className="linkItem">
          <a href="#speakers" className="link">
            Speakers
          </a>
        </li>
        <li className="linkItem">
          <a href="#sponsors" className="link">
            Sponsors
          </a>
        </li>
      </ul>
      <a href="#ticket" className="navbarRegisterButton">
        Get Ticket
      </a>
    </nav>
  );
};

export default Navbar;
