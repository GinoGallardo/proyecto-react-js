import 'animate.css';
import { DotSpinner } from '@uiball/loaders'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data, id]);


  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {loading && <span className='loading d-flex justify-content-center align-items-center'><DotSpinner size={80} speed={0.9} color="black" /></span>}
          {!loading && (
            <div className='container d-lg-flex mt-5 mb-5'>
              <div className="row animate__fadeInLeft d-lg-flex justify-content-center align-content-center col-lg-5">
                <img className='p-0 w-75' src={data.image} alt="" />
              </div>
              <div className="row mt-2 col-lg-7">
                <div className="container ms-lg-5 mb-4">
                  <h3 className='ms-4'>{data.marca}</h3>
                  <h5 className='ms-4 d-inline border'>{data.modelo}</h5>
                  <p className='h6'>{data.descripcion}</p>
                  <span className='h5'>${data.price}</span>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='container d-flex justify-content-center align-items-end'>
                    {
                      goToCart
                        ? <Link className='btn btn-outline-success ms-lg-3 ' to='/Cart'>Terminar Compra</Link>
                        : <ItemCount initial={0} stock={5} onAdd={onAdd} />
                    }
                  </div>
                  <div className='container d-flex justify-content-center align-items-end mb-2'>
                    <button className="btn btn-outline-warning" onClick={() => navigate('/Product')}>Segui Comprando</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetail