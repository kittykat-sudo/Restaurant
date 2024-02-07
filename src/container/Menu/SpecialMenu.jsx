import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Breakfast</p>
        
        <div className="app__specialMenu_menu_items">
          {data.wines.slice(0,5).map((wine, index) => (
            <a
              key={wine.title + index}
              href={`#chef`}  // Replace `#` with the actual URL you want to link to
              className="menu-item-link"
            >
              <MenuItem
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            </a>
          ))}
        </div>

      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.slice(0,5).map((cocktail, index) => (
            <a
              key={cocktail.title + index}
              href={`#chef`}  // Replace `#` with the actual URL you want to link to
              className="menu-item-link"
            >
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <a href="#home">
      <button type="button" className="custom__button">
        View More
      </button>
      </a>
    </div>
  </div>
);

export default SpecialMenu;
