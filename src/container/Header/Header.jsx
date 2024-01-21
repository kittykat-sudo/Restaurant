import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Italian Retreat: Savor & Stay" />
      <h1 className="app__header-h1">The Key To Fine Dining & Staying</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Discover Le Bella 1912 – your Italian retreat in Galle Fort. Indulge in authentic flavors,
      stylish stays, and easy access to historic palaces. Let us be your gateway to both Italy and the charm of Galle. Benvenuti a Le Bella 1912!
      {" "}
      </p>
      <button type="button" className="custom__button">
        
        <a href="#menu">Explore Menu</a>
        
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
