import React, { useState } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.prevenDefault();
  };

  const handleInput = event => {
    setQuery(event.target.value);
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

export default Movies;
