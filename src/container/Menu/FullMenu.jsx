import { MenuItem } from "../../components";
import { data } from "../../constants";

const FullMenu = () => (
  <div className="app__fullMenu">
    <h1>Full Menu</h1>

    <div className="app__fullMenu-wines">
      <h2>Wines</h2>
      {data.wines.map((wine, index) => (
        <MenuItem
          key={wine.title + index}
          title={wine.title}
          price={wine.price}
          tags={wine.tags}
        />
      ))}
    </div>

    <div className="app__fullMenu-cocktails">
      <h2>Cocktails</h2>
      {data.cocktails.map((cocktail, index) => (
        <MenuItem
          key={cocktail.title + index}
          title={cocktail.title}
          price={cocktail.price}
          tags={cocktail.tags}
        />
      ))}
    </div>
  </div>
);

export default FullMenu;