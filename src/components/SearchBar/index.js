import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  //Define a click event that when a user clicks on it it fires onsubmit
  //   const handleClick = (event) => {
  //     event.preventDefault();
  //     onSubmit("click");
  //   };
  //Since we using a form we do a handle form submit event to send data to the parent
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  //Handle change
  const handleChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor=''>Search:</label>
          {/* get value out of the input */}
          <input value={term} name='term' onChange={handleChange} />
          {/* Set a condition if search term is shorter than 3 by short circuiting */}
          {/* If both state are true use the first one */}
          {/* {term.length < 3 && "Term must be longer"} */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
