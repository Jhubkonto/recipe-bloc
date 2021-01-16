import React from 'react';
import { Link } from "react-router-dom";

function MenuItems() {

// const [isDisplayed, setIsDisplayed] = useState(props);

  return (
    <nav>
      <div className="menu">
        <h3>Menu</h3>
        <ul className="navLinks">
          <Link to="/addrecipe">
            <li>Add recipe</li>
          </Link>
          <Link to="/myrecipes">
            <li>My recipes</li>
          </Link>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default MenuItems;

// <div className="menu">
//   <a href="/">
//     Add recipe
//     </a>
//   <a href="/">
//     My recipes
//     </a>
//   <a href="/">
//     Log out
//     </a>
//   <a href="/">
//     About us
//     </a>
// </div>
