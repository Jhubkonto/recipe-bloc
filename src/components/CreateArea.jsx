import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [recipe, setRecipe] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setRecipe((prevRecipe) => {
      return {
        ...prevRecipe,
        [name]: value
      };
    });
  }

  function submitRecipe(event) {
    props.onAdd(recipe);
    setRecipe({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-recipe">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={recipe.title}
            placeholder="Title"
          />
        )}
        <textarea
          rows={isExpanded ? 3 : 1}
          name="content"
          onChange={handleChange}
          value={recipe.content}
          placeholder="Commentary..."
          onClick={expand}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitRecipe}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
