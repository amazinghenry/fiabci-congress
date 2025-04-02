import "./EventUpdate.css";

const EventUpdate = () => {
  return (
    <div className="event-update-container">
      <div className="container">
        <h1>Event Update</h1>
        <hr />
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/0VTPX67lyS0?si=rdYyz-M0MpF28n8n"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventUpdate;
