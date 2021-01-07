import React from "react";

function Recipe(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="recipe">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Recipe;
