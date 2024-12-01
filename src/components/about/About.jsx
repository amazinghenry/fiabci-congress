import "./About.css";
import aboutImage from "../../assets/aboutImage.webp";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutGroup container">
        <img src={aboutImage} alt="A previous event" className="img-fluid" />
        <div className="aboutItem">
          <h2>WELCOME TO FIABCI WORLD REAL ESTATE CONGRESS 2025 </h2>
          <p>
            The FIABCI World Real Estate Congress is an annual global gathering
            of real estate professionals, policymakers, and thought leaders
            committed to shaping the future of the industry. For 2025, the
            congress centres on the theme “Global Real Estate Renaissance,”
            focusing on innovation, sustainability, and the transformative power
            of real estate in a rapidly evolving world.
          </p>
          <p>
            Join us to explore cutting-edge insights, foster international
            collaborations, and redefine the possibilities in global real
            estate.
          </p>
          <a
            href="https://www.fiabci.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutButton"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
