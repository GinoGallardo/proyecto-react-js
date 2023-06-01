import 'animate.css';
import { DotSpinner } from '@uiball/loaders'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import Products from '../Data/Products'

export const Detail = () => {

  const { id } = useParams()
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        const filter = Products.find((product) => product.id === id);
      setProduct(filter)
      setLoading(false);
    }, 2000);

  }, [id])

  const agregarAlCarrito = () => {
    
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {loading && <span className='loading d-flex justify-content-center align-items-center'><DotSpinner size={80}speed={0.9} color="black" /></span>}
          {Products && !loading && (
            <div className='container d-flex mt-5 mb-5'>
              <div className="container-fluid animate__fadeInLeft d-flex justify-content-center align-content-center col-lg-5 ">
                <img className='w-75' src={product.image} alt="" />
              </div>
              <div className="row col-lg-7">
                <div className="container ms-5">
                  <div className="row">
                    <h3 className='m-0 tracking-in-contract'>{product.marca}</h3>
                    <h5 >{product.modelo}</h5>
                    <p>{product.descripcion}</p>
                    <span className='fs-2'>${product.price}</span>
                  </div>
                </div>
                <div className='container'>
                  <ItemCount initial={1} stock={5}/>
                </div>
                <div className='d-grid gap-2'>
                  <button className="btn btn-outline-success mb-2" onClick={agregarAlCarrito}>Agregar al Carrito</button>
                  <button className="btn btn-outline-warning" onClick={()=>navigate('/Product')}>Segui Comprando</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Detail