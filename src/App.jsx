import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LumberPage from "./pages/LumberPage";
import {OnPageLoad} from "./components/Shared/OnPageLoad";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
      {loading ? (
        <OnPageLoad />
      ) : (
        <BrowserRouter>
          <div className="appContainer" data-aos="fade-up">
            <Header data-aos="fade-down" />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/lumberjvck" element={<LumberPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}
