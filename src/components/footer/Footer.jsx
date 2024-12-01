import "./Footer.css";
import fiabciLogo from "../../assets/faibciLogo.webp";

const thisYear = new Date();

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer container">
        <div className="footerLogo">
          <img src={fiabciLogo} alt="fiabci logo" className="img-fluid" />
        </div>
        <div className="footerGroup">
          <a href="#" className="footerLink">
            About
          </a>
          <a href="#" className="footerLink">
            Agenda
          </a>
          <a href="#" className="footerLink">
            Speakers
          </a>
          <a href="#" className="footerLink">
            Sponsors
          </a>
        </div>
      </div>
      <hr />
      <p className="copyright">
        © {thisYear.getFullYear()}, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
