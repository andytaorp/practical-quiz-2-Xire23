import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (!title) return;

    const newTitle = {
      id: Date.now(),
      name: title,
      completed: false,
    };

    onAddMovie(newTitle);
    setTitle("");
  };

  return(
    // TODO: add a form to add a new movie
    <form onSubmit = { handleSubmit } >
        <input
          type="text"
          placeholder="New Movie"
          value={title}
          onChange={(e) => setTitle(e.target.value)
          }
        />
        <button>Add Movie</button> 
      </form >
  ) 
}