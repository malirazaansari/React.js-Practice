import React from "react";

function Note(props) {
  function handleAction() {
    props.onDelete(props.id);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleAction}>Delete</button>
    </div>
  );
}

export default Note;
