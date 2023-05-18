import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpeg'
import img4 from '../../img/img4.jpeg'
import img5 from '../../img/img5.jpeg'
import img6 from '../../img/img6.jpeg'

export const Detail = () => {

  const navigate = useNavigate()
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

  const agrgarAlCarrito = () => {
    navigate('/Productos')
  }

  return (
    <Fragment>
      <button className='btn btn-outline-info' onClick={() => navigate(-1)}>Volver</button>
      <hr />
      {loading && <h2>Cargando...</h2>}
      {product && !loading && (
        <div>
        <img src={product.image} alt="" />
        <h3>{product.name}</h3>
        <p>{product.descripcion}</p>
        <span>{product.price}</span>

        <h4>ACA VA MI CONTER</h4>
        <button className='btn btn-outline-info' onClick={agrgarAlCarrito}>Agregar al Carrito</button>
      </div>  
      )}
      </Fragment>
  );
};

export default Detail