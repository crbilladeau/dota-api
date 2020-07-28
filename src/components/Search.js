import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

const Search = ({ search, setSearch }) => {
  const onChange = (q) => {
    setSearch(q);
  };

  return (
    <SearchContainer className='mx-auto my-5'>
      <SearchBar
        type='text'
        className='form-control'
        placeholder='Search heroes...'
        value={search}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </SearchContainer>
  );
};

const SearchContainer = styled(Row)`
  height: 40px;
  max-width: 600px;
`;

const SearchBar = styled.input`
  border: gray 2px solid;
  border-radius: 15px;
  font-size: 20px;
  height: 100%;
  width: 100%;
  padding: 1em 0 1em 1.5em;
`;

export default Search;
