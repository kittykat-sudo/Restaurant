import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";
import bookingRoom from '../../assets/bookingRoom.jpg';
import bookingTable from '../../assets/bookingTable.jpg';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Booking" />
    </div>
    <div className="app__newsletter-images">
      <div className="image-container">
        <img src={bookingRoom} alt="Booking Room" />
        <div className="image-text">Rooms</div>
      </div>
      <div className="image-container">
        <img src={bookingTable} alt="Booking Table" />
        <div className="image-text">Tables</div>
      </div>
    </div>
  </div>
);

export default Newsletter;
