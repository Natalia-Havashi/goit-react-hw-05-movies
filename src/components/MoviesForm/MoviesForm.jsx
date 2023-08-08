import React from 'react';
import { BtnInput, Form, Input } from './MoviesForm.styled';

const MoviesForm = ({ setSearchParams, movieQuery }) => {
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ search: movieQuery });
  };

  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="search"
          value={movieQuery}
          onChange={handleChange}
          placeholder="Enter a value"
        />
        <BtnInput type="submit">Search</BtnInput>
      </Form>
    </div>
  );
};

export default MoviesForm;
