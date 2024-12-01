import "./Sponsors.css";
import sponsors from "../../data/sponsorData";
import SponsorsCarousel from "./SponsorsCarousel";

const Sponsors = () => {
  return (
    <div className="sponsorContainer container" id="sponsors">
      <h2>EVENT SPONSORS</h2>
      <SponsorsCarousel sponsors={sponsors} />
    </div>
  );
};

export default Sponsors;
