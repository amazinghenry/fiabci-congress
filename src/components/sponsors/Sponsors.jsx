import "./Sponsors.css";
import sponsors from "../../data/sponsorData";
import SponsorsCarousel from "./SponsorsCarousel";
import thinkmintLogo from "../../assets/thinkmintlogo.webp";

const Sponsors = () => {
  return (
    <div className="container">
      <div className="sponsorContainer" id="sponsors">
        <h2>EVENT SPONSORS</h2>
        <SponsorsCarousel sponsors={sponsors} />
      </div>

      <h2 className="media-partner">MEDIA PARTNER</h2>
      <img
        src={thinkmintLogo}
        alt="thinkmint logo"
        className="img-fluid media-partner-logo"
      />
    </div>
  );
};

export default Sponsors;
