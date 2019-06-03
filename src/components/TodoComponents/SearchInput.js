import React from 'react';

const SearchInput = ({ inputValue, onChangeInput }) => (
  <div className="search-div">
    <input placeholder="Search" value={inputValue} onChange={onChangeInput} type="text" />
  </div>
);

export default SearchInput;
