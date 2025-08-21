import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import AOS from "aos";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function AOSRefresher() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname, location.hash]);

  return null;
}

function LandingPage() {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </BaseLayout>
  );
}

export default function App() {
  return (
    <Router>
      <AOSRefresher />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
