import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpeg'
import img4 from '../../img/img4.jpeg'
import img5 from '../../img/img5.jpeg'
import img6 from '../../img/img6.jpeg'
import ItemCount from './ItemCount'

export const Detail = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)

  const products = [
    { id: '1', name: 'Producto 1', image: img1, descripcion: 'Descripcion', price: 100 },
    { id: '2', name: 'Producto 2', image: img2, descripcion: 'Descripcion', price: 200 },
    { id: '3', name: 'Producto 3', image: img3, descripcion: 'Descripcion', price: 300 },
    { id: '4', name: 'Producto 4', image: img4, descripcion: 'Descripcion', price: 400 },
    { id: '5', name: 'Producto 5', image: img5, descripcion: 'Descripcion', price: 500 },
    { id: '6', name: 'Producto 6', image: img6, descripcion: 'Descripcion', price: 600 },
  ]

  useEffect(() => {
    setTimeout(() => {
      const filter = products.find((product) => product.id === id);
      setProduct(filter)
      setLoading(false)
    }, 2000);

  }, []);

  const agregarAlCarrito = () => {
    navigate('/Productos')
  }
  const navigate = useNavigate()
  const onAdd = (quantity) => { }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {loading && <h2 className='text-center'>Cargando...</h2>}
          {product && !loading && (
            <div className='container-fluit d-flex mt-5'>
              <div className="conatiner-fluit w-25 ">
                <img className='w-100' src={product.image} alt="" />
              </div>
              <div className="row">
                <div className="container">
                  <div className="row">
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                    <p>{product.descripcion}</p>
                  </div>
                </div>
                <div className='container'>
                  <ItemCount initial={1} stock={5}/>
                </div>
                <div className='class="d-grid gap-2"'>
                  <button className="btn btn-outline-success" onClick={agregarAlCarrito}>Agregar al Carrito</button>
                  <button className="btn btn-outline-warning" onClick={()=>navigate('../../pages/Product')}>Volver</button>
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