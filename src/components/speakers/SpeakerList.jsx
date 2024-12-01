import "./Speaker.css";
import SpeakerCard from "./SpeakerCard";
import speakers from "../../data/speakerData";

const SpeakerList = () => {
  return (
    <div className="speakerListContainer" id="speakers">
      <div>
        <SpeakerCard speakers={speakers} />
      </div>
    </div>
  );
};

export default SpeakerList;
