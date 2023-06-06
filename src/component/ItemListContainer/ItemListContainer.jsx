import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Products from '../Data/Products';
import Category from '../Category/Category';
import { useParams } from 'react-router-dom';
import Search from '../Search/Search';

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const { categoryId } = useParams();

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });
  };

  useEffect(() => {
    fetchData().then((res) => {
      if (categoryId) {
        setData(res.filter(Hombre => Hombre.categoria === categoryId));
      } else {
        setData(res);
      }
    });
  }, [categoryId]);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let productsSearch = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className="container-fluid col-md-3 mt-0 mx-2 ">
          <div className="col-md-3 position-fixed">
            <Search filter={filter} onSearch={searchText} />
            <Category filter={filter} onSearch={searchText} />
          </div>
        </div>
        <div className="row col-md-9 d-flex justify-content-center">
          <div className=" col-md-11">
            <h2 className="text-center text-dark animate__rubberBand">Selecciona tus productos!!!</h2>
            <div className="row">
              <ItemList data={productsSearch} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;



