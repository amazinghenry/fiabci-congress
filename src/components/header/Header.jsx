import "./Header.css";

import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Navbar />
        <div className="headerItem">
          <h1>75th FIABCI WORLD</h1>
          <h1>REAL ESTATE CONGRESS 2025</h1>
          <h2>
            Theme: <span>GLOBAL REAL ESTATE RENAISSANCE</span>
          </h2>
          <div className="headerDate">
            June 2nd - 6th, 2025 \\ 10:00 - 16:00
          </div>
          <div className="headerVenue">
            <a
              href="https://www.google.com/maps/place/Eko+Hotel+and+Suites/@6.4281104,3.4219655,17z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eko Hotel and Suites, Victoria Island, Lagos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;