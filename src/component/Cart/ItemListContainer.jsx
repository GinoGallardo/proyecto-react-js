import React, { Fragment, useState, useEffect } from 'react'
import ItemList from './ItemList'
import Products from '../Data/Products';
import Category from '../Category/Category';

export const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve =>{
      setTimeout(() => {
        resolve(Products);
      }, 1000);
    });
    getData.then(res => setData(res));
  },[])

	const filterResult = (catItem) =>{
		const result=Products.filter((curData)=>{
			return curData.category===catItem;
		});
		setData(result);
	}


  return (
    <>
			<h2 className='text-center text-info'>Selecciona tús productos!!!</h2>
				<div className="container-fluid d-flex mx-2">
					<div className="row col-md-3 mt-5 mx-2">
						<div className="col-md-3 position-fixed">
            <Category filterResult={filterResult} />
						</div>
					</div>
          <div className="row col-md-9 d-flex justify-content-center">
            <div className='col-md-11'>
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