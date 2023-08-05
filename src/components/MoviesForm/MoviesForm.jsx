import React from "react";

const MoviesForm = ({query}) => {


  const handleSubmit = event => {
    event.prevenDefault();
  };

  const handleInput = event => {
    event.target.value()
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Enter a value"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default MoviesForm;
