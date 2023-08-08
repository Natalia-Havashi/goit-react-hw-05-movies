import React from 'react';

const MoviesForm = ({ setSearchParams, movieQuery, getSearch }) => {
  const handleSubmit = event => {
    event.prevenDefault();
    getSearch(movieQuery)
    // event.target.elements.query.value();
    // const value = query !== '' ? {query} : {};
    // setSearchParams(value)
  };

  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  }; 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={movieQuery}
          onChange={handleChange}
          placeholder="Enter a value"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesForm;
