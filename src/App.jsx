import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Ticket from "./components/ticket/Ticket";
import SpeakerList from "./components/speakers/SpeakerList";
import Schedule from "./components/schedule/Schedule";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Ticket />
      </div>
      <div>
        <SpeakerList />
      </div>
      <div>
        <Schedule />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
