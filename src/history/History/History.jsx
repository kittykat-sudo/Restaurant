import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./HistorySection.css";

const HistorySection = () => (
  <div className="app__history-section flex__center section__padding" id="history">
    <div className="app__history-section-title">
      <SubHeading title="Our Rich History" />
      <h1 className="headtext__cormorant">Journey Through Time</h1>
    </div>

    <div className="app__history-section-content">
      {/* Add historical content and images here */}
      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        pharetra, arcu nec suscipit aliquet, dolor libero malesuada ligula, ut
        convallis odio tellus in velit.
      </p>
      <img src={images.historyImage} alt="history_image" className="history__img" />
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        Read More
      </button>
    </div>
  </div>
);

export default HistorySection;
