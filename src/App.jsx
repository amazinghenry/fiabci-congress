import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import EventUpdate from "./components/eventupdate/EventUpdate";
// import Ticket from "./components/ticket/Ticket";
import SpeakerList from "./components/speakers/SpeakerList";
// import Schedule from "./components/schedule/Schedule";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/footer/Footer";
import Packages from "./components/packages/Packages";
import NoPage from "./components/nopage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// Separate component to access useLocation
function AppContent() {
  const location = useLocation();
  const isEventUpdatePage = location.pathname === "/event-update";

  return (
    <>
      {!isEventUpdatePage && <Header />}

      <Routes>
        <Route path="/event-update" element={<EventUpdate />} />
        <Route
          path="*"
          element={
            <>
              <About />
              <Packages />
              <SpeakerList />
              <Sponsors />
            </>
          }
        />
      </Routes>

      {!isEventUpdatePage && <Footer />}
    </>
  );
}

export default App;
