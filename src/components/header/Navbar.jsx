import React, { useState } from "react";
import "./Header.css";
import fiabciLogoWhite from "../../assets/fiabcilogo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <img src={fiabciLogoWhite} alt="fiabci logo" className="img-fluid" />

        <div className="menuIcon" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`linkGroup ${menuOpen ? "open" : ""}`}>
          <li className="linkItem">
            <a href="#about" className="link">
              About Us
            </a>
          </li>
          <li className="linkItem">
            <a href="/registration-form" className="link">
              Register
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
          <li className="linkItem">
            <a href="/event-update" className="link">
              Event Update
            </a>
          </li>
        </ul>

        <a href="#packages" className="navbarRegisterButton">
          Get Ticket
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
