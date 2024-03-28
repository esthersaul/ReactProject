import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import Destination from "./components/Destination";
import Gallery from "./components/Gallery";
import ContactDetail from "./components/ContactDetail";
import Footer from "./components/Footer";
import Map from "./components/Map";




function App() {
  return (
    <div>
      <TopBar  />
      <Navbar />
      <Hero />
      <Icons />
      <Destination />
      <Gallery />
      <ContactDetail />
      <Footer />
    </div>
  );
}

export default App;
 