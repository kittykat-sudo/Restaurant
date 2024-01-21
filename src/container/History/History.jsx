// History.js
import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./History.css";

const History = () => {
  return (
    <div className="app__history flex__center" id="history">
      <div className="app__history-content">
        <SubHeading title="Our Journey" />
        <h1 className="headtext__cormorant">History</h1>
        <p className="p__opensans" style={{ color: "#AAAAAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
      <div className="app__history-images">
        <img src={images.historyImage1} alt="History Image 1" />
        <img src={images.historyImage2} alt="History Image 2" />
        <img src={images.historyImage3} alt="History Image 3" />
        {/* Add more history images as needed */}
      </div>
    </div>
  );
};

export default History;
