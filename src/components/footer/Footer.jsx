import "./Footer.css";
import fiabciLogo from "../../assets/fiabcilogo.png";

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
          <a href="/registration-form" className="footerLink">
            Register
          </a>
          <a href="#" className="footerLink">
            Speakers
          </a>
          <a href="#" className="footerLink">
            Sponsors
          </a>
          <a href="event-update" className="footerLink">
            Event Update
          </a>
        </div>
      </div>

      <div className="footerContact container">
        For more info Call: +2348167723543 or email:
        info@fiabciworldrealestatecongress.com.ng{" "}
      </div>

      <hr />
      <p className="copyright">
        © {thisYear.getFullYear()}, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
