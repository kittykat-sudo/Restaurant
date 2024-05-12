import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Owner's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
          At Le Bella 1912, we believe in the art of hospitality, where every guest is welcomed with warmth and treated with care.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          We believe in the joy of sharing good food with loved ones, creating moments that linger in memory. Our belief in quality, creativity, and community drives us to create exceptional dining experiences for all.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Lasantha</p>
        <p className="p__opensans">Owner & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
