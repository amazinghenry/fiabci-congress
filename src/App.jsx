import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import EventUpdate from "./components/eventupdate/EventUpdate";
import SpeakerList from "./components/speakers/SpeakerList";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/footer/Footer";
import Packages from "./components/packages/Packages";
import Form from "./components/form/Form";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === "/event-update";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/event-update" element={<EventUpdate />} />
        <Route path="/registration-form" element={<Form />} />
        <Route
          path="/"
          element={
            <>
              <About />
              <Packages />
              <SpeakerList />
              <Sponsors />
            </>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
