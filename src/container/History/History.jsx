import React from "react";
import { SubHeading } from "../../components";
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
        {/* Use Link to navigate to another page */}
        <button type="button" className="custom__button">
          <a href="/other-page">Learn More</a>
        </button>
      </div>
      <div className="app__history-images">

      </div>
    </div>
  );
};

export default History;
