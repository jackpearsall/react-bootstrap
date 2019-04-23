import React from 'react';

const SearchForm = props => (
  <div className="searchBox">
    <input type="text" value={props.searchText} placeholder="Enter Location...." onKeyPress={props.handleKeyDown} onChange={props.handleInputChange} />
    <button onClick={() => props.updateCity(props.searchText)} type="submit">Search</button>
    <span className="error">{props.errorMessage}</span>
  </div>
);

export default SearchForm;
