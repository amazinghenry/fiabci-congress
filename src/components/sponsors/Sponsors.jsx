import "./Sponsors.css";
import sponsors from "../../data/sponsorData";
import SponsorsCarousel from "./SponsorsCarousel";
import thinkmintLogo from "../../assets/thinkmintlogo.webp";
import castlesLogo from "../../assets/castleslogo.webp";

const Sponsors = () => {
  return (
    <div className="container">
      <div className="sponsorContainer" id="sponsors">
        <h2>EVENT SPONSORS</h2>
        <SponsorsCarousel sponsors={sponsors} />
      </div>

      <div className="mediapartnerContainer">
        <h2>MEDIA PARTNER</h2>
        <div className="mediapartner-logos">
          <img src={thinkmintLogo} alt="thinkmint logo" className="img-fluid" />
          <img src={castlesLogo} alt="castles logo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
