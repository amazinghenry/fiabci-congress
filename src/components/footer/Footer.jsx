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

      <div className="footerContact container">
        For more info Call: 0803-5899-439 , 0912-5153-840 or email:
        info@fiabcinigeria.com{" "}
      </div>

      <hr />
      <p className="copyright">
        © {thisYear.getFullYear()}, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
