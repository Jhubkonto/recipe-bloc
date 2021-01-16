import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import HamburgerMenu from "./Menu/HamburgerMenu";

function Header(props) {

  return (
    <header>
    <h1>
      <CreateIcon />Recipe Bloc
    </h1>
    <div className="hamburgerMenu">
      <HamburgerMenu
        isOpen={props.isOpen}
        menuClicked={(event) => props.onChange(event)}
        width={35}
        height={25}
        strokeWidth={3}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
    />
    </div>
   </header>
 );
}

export default Header;
