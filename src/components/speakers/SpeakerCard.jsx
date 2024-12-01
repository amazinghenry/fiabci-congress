import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Speaker.css";

const SpeakerCard = ({ speakers }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [filter, setFilter] = useState("all");

  // Mapping filter keys to display labels
  const filterLabels = {
    all: "All Speakers",
    special: "Special Guest of Honour",
    keynote: "Keynote Speakers",
  };

  // Filter speakers based on selected category
  const filteredSpeakers =
    filter === "all"
      ? speakers
      : speakers.filter((speaker) => speaker.category === filter);

  return (
    <div className="speakerContainer container">
      <h2>{filterLabels[filter]}</h2>

      <div className="speakersFilterButtons">
        {Object.keys(filterLabels).map((key) => (
          <button key={key} onClick={() => setFilter(key)}>
            {filterLabels[key]}
          </button>
        ))}
      </div>

      <motion.div
        className="speakerGroup"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3 }}
      >
        {filteredSpeakers.length > 0 ? (
          filteredSpeakers.map((speaker, index) => (
            <div className="speakerItem" key={index}>
              <img
                src={`./speakers/${speaker.image}`}
                alt={speaker.name || "Speaker"}
                className="img-fluid speakerImage"
              />
              <h3 className="speakerName">{speaker.name}</h3>
              <h4 className="speakerPosition">{speaker.position}</h4>
              <h4 className="speakerCompany">{speaker.company}</h4>
            </div>
          ))
        ) : (
          <p>No speakers found for the selected category.</p>
        )}
      </motion.div>
    </div>
  );
};

export default SpeakerCard;
