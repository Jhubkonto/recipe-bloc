import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";
import CreateArea from "./CreateArea";

function App() {

  const [recipes, setRecipe] = useState([]);

  function addRecipe(newRecipe) {
    setRecipe(prevRecipes => {
      return [...prevRecipes, newRecipe];
    });
  }

  function deleteRecipe(id) {
    setRecipe(prevRecipes => {
      return prevRecipes.filter((recipeItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addRecipe} />
      {recipes.map((recipeItem, index) => {
        return (
          <Recipe
            key={index}
            id={index}
            title={recipeItem.title}
            content={recipeItem.content}
            onDelete={deleteRecipe}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
