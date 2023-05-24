import React, { useState } from 'react';
import Products from '../Data/Products';

const Category = () => {
  const [data, setData] = useState(Products);

  const filterResult = (catItem) => {
    const result = Products.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('men')}>
        Hombre
      </button>

      <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('woman')}>
        Mujer
      </button>

      <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('woman_children')}>
        Niña
      </button>

      <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('all')}>
        Todo
      </button>
    </>
  );
};

export default Category;

