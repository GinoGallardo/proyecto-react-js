import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Search from '../Search/Search';
import Category from '../Category/Category';
import { Orbit } from '@uiball/loaders';
import ItemList from '../ItemList/ItemList';

const ItemMarcaContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('');
  const { marcaId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "productos");
      if (marcaId) {
        const queryFilter = query(queryCollection, where("marca", "==", marcaId))
        getDocs(queryFilter)
          .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
      } else {
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
      }
      setLoading(false);
    }, 2000);
  }, [marcaId])

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
    {loading && <span className='loading d-flex justify-content-center align-items-center'><Orbit size={35} color="#231F20" /></span>}
      {!loading && (
      <div>
        <div className='d-lg-flex justify-content-center'>
          <div className="container-fluid col-12 col-lg-3 mt-0 mx-2 ">
            <div className="col-12 position-lg-fixed">
              <Search filter={filter} onSearch={searchText} />
              <Category/>
            </div>
          </div>
          <div className="row col-md-9">
            <div className=" col-md-11">
              <h2 className="text-center text-dark animate__rubberBand">Selecciona tus productos!!!</h2>
              <div className="row d-flex justify-content-center">
                <ItemList data={productsSearch} />
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default ItemMarcaContainer