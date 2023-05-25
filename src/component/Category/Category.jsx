import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

  return (
    <>
      <Link to='/category/Man'>
        <button className='btn btn-warning w-100 mb-4'>
          Hombre
        </button>
      </Link>
      <Link to='/category/Woman'>
        <button className='btn btn-warning w-100 mb-4'>
          Woman
        </button>
      </Link>
      <Link to='/category/Woman_children'>
        <button className='btn btn-warning w-100 mb-4'>
          Niña
        </button>
      </Link>
      <Link to='/category/id'>
        <button className='btn btn-warning w-100 mb-4'>
          Todo
        </button>
      </Link>
    </>
  );
};

export default Category;