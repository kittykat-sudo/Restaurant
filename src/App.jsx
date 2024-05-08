import React from "react";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
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
} from "./container";

import {
  Navbar
} from "./components";

import "./App.css";
import OtherPage from "./container/HistoryDetails/OtherPage.jsx";

// Import the RestaurantSchema component
// import RestaurantSchema from './RestaurantSchema';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/special-menu';

  return (
    <div>
      {showNavbar && <Navbar />}
      {/* Include the RestaurantSchema component here */}
      {/* <RestaurantSchema /> */}
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        }/>
        <Route path="/special-menu" element={<SpecialMenu fullMenu />} />
        <Route path="/other-page" element={<OtherPage/>} />
      </Routes>
    </div>
  );
};

export default App;