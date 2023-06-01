import React from 'react';

const Search = ({ filter, onSearch }) => {
  return (
    <div className="col-12 mb-5">
      <div className="mb-3 col-12 mx-auto text-center">
        <label className="form-label h4">Search</label>
        <input
          type="text"
          className="form-control"
          value={filter}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default Search;

