import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  History,
  // Footercopy,
  // Testimonials, // Add this line to import the new component
} from "./container";

import {
  Navbar
  // Menuttem,
} from "./components";


import "./App.css";


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <History />
    <FindUs />
    <Footer />
    
  </div>
);

export default App;
