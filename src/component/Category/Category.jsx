import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const nombre = [
    {
      name: 'Hombre'
    },
    {
      name: 'Mujer'
    },
    {
      name: 'Todo'
    }
  ]

  return (
    <>
    {
      nombre.map(({name},index)=>(
        <Link key={index} to='/category/Man'>
          <button className='btn btn-warning w-100 mb-4'>
          {name}
        </button>
      </Link>  
      ))
    }
    </>
  );
};

export default Category;