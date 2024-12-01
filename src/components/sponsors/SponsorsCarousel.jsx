import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SponsorsCarousel = ({ sponsors }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      arrows={false}
    >
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-logo">
          <img
            src={`./sponsors/${sponsor.image}`}
            alt={sponsor.name}
            className="img-fluid "
          />
        </div>
      ))}
    </Carousel>
  );
};

export default SponsorsCarousel;
