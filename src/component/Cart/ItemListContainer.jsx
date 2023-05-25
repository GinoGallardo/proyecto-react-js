import React, { Fragment, useState, useEffect } from 'react'
import ItemList from './ItemList'
import Products from '../Data/Products';
import Category from '../Category/Category';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const {categoryId} = useParams ()

  const getData = () => {
    return new Promise(resolve =>{
      setTimeout(() => {
        resolve(Products);
      }, 1000);
    });
  }

	const getDataByCategory = (category) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(Products.filter(prod => prod.category === categoryId))
      }, 1000);
    });
  }

  useEffect(() =>{
    if(categoryId){
      getDataByCategory(categoryId).then(res => setData(res))
    }
    else{
      getData().then(res => setData(res));
    }
  }, [categoryId])

  return (
    <>
				<div className="container-fluid d-flex mx-2">
					<div className="row col-md-3 mt-5 mx-2">
						<div className="col-md-3 position-fixed">
            <Category data={data} />
						</div>
					</div>
          <div className="row col-md-9 d-flex justify-content-center">
            <div className='col-md-11'>
            <h2 className='text-center text-info'>Selecciona tús productos!!!</h2>
              <div className="row">
                <ItemList data={data}/>
              </div>
            </div>
          </div>
				</div>
		</>  
  )
}

export default ItemListContainer