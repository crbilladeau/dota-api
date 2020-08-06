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
  border-radius: 10px;
  background-color: #424242;
  color: whitesmoke;
  font-size: 20px;
  height: 100%;
  width: 100%;
  padding: 1em 0 1em 1.5em;
  &:focus {
    background-color: #424242;
    border-color: #ff2f2f;
    box-shadow: 6px 6px #ff4848;
    color: whitesmoke;
  }
  ::placeholder {
    color: whitesmoke;
    text-shadow: 1px 1px 2px #333;
  }
`;

export default Search;
