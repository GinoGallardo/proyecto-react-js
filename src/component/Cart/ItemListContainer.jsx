import React, { Fragment, useState, useEffect } from 'react';
import ItemList from './ItemList';
import Products from '../Data/Products';
import Category from '../Category/Category';
import { useParams } from 'react-router-dom';
import Search from '../Search/Search';

export const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const { categoryId } = useParams();

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Products);
      }, 1000);
    });
  };

  const getDataByCategory = (category) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(Products.filter((prod) => prod.category === category));
      }, 1000);
    });
  };

  useEffect(() => {
    if (categoryId) {
      getDataByCategory(categoryId).then((res) => setData(res));
    } else {
      getData().then((res) => setData(res));
    }
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
      <div className="container-fluid col-md-3 mt-0 mx-2 ">
        <div className="col-md-3 position-fixed">
          <Search filter={filter} onSearch={searchText} />
          <Category data={data} />
        </div>
      </div>
      <div className="row col-md-9 d-flex justify-content-center">
        <div className="col-md-11">
          <h2 className="text-center text-dark animate__rubberBand">Selecciona tus productos!!!</h2>
          <div className="row">
            <ItemList data={productsSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;

