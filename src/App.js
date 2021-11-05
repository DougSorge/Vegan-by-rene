import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

import NavBar from "./Components/NavMenu/Desktop/NavBar";
import NavMenuBtn from "./Components/NavMenu/Mobile/NavMenuBtn";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });

  return (
    <Router>
      {isMobile ? <NavMenuBtn /> : <NavBar />}
      <Hero />
      <About />
    </Router>
  );
}

export default App;
