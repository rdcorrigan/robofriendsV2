import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input 
        className="pa3 ba b b--green bg-lightest-blue mb2"
        type='search'
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;