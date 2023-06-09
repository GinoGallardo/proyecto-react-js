import React from 'react';
import './search.css'

const Search = ({ filter, onSearch }) => {
  return (
    <div className="col-12 mt-3 mb-5">
      <div className="mb-3 col-12 mx-auto text-center">
        <form className='d-lg-flex align-items-center border p-1' action="">
          <label htmlFor='search'><i className="bi bi-search"></i></label>
          <input
          type="text"
          id='search'
          className="search"
          value={filter}
          onChange={onSearch}
          placeholder='Search'
        />
        </form>
      </div>
    </div>
  );
};

export default Search;

