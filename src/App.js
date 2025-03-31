import React, { useState } from "react";
import MarvelNavbar from "./Comeponents/Navbar/topNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSlider from "./Comeponents/Hero-Slide/Heroslider";
import ContentSection from "./Comeponents/Content/ContentSection";
import Footer from "./Comeponents/Navbar/Footer";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <MarvelNavbar isNavOpen={isNavOpen} onToggle={handleToggle} />
      <HeroSlider/>
      <ContentSection/>
      <Footer/>
    </div>
  );
}

export default App;