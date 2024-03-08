import React from "react";
import { SubHeading } from "../../components";
import { Link } from "react-router-dom";
import "./History.css";
import image1 from "../../assets/historyImage1.png";
import image2 from "../../assets/historyImage2.png";


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
          <Link to="/other-page">Learn More</Link>
        </button>
      </div>
      <div className="app__history-images">
        <img src={image1} alt="History 1" />
        <img src={image2} alt="History 2" />
      </div>
    </div>
  );
};

export default History;
