import React, { useState } from "react";
import CreateIcon from '@material-ui/icons/Create';
import HamburgerMenu from "./Menu/HamburgerMenu";
import MenuItems from "./Menu/MenuItems";

function Header() {

const [menuState, setMenuState] = useState(false);

  function handleClick() {
    if (menuState === true) {
      setMenuState(false);
    } else if (menuState === false) {
      setMenuState(true);
    }
  }

  return (
    <header>
    <h1>
      <CreateIcon />Recipe Bloc
    </h1>
    <div className="hamburgerMenu">
      <HamburgerMenu
        isOpen={menuState}
        menuClicked={handleClick}
        width={35}
        height={25}
        strokeWidth={3}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
    />
    </div>

    {menuState && (
      <div>
        <MenuItems />
        </div>
      )}
   </header>
 );
}

export default Header;
