import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MenuItems from "./Menu/MenuItems";
import AboutUs from "./Pages/AboutUs";
import AddRecipe from "./Pages/AddRecipe";
import MyRecipes from "./Pages/MyRecipes";

function App() {

  const [menuState, setMenuState] = useState(false);

  function handleMenuClick() {
    if (menuState === true) {
      setMenuState(false);
    } else if (menuState === false) {
      setMenuState(true);
    }
  }

  return (
    <div>
      <Header onChange={handleMenuClick}
      isOpen={menuState}/>
      <Router>
      {menuState && (
        <div>
          <MenuItems />
          </div>
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addrecipe" component={AddRecipe} />
          <Route path="/myrecipes" component={MyRecipes} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
