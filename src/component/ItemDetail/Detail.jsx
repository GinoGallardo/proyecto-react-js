import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import img1_f from '../../img/img1_f.jpeg';
import img2_f from '../../img/img2_f.jpeg';
import img3_f from '../../img/img3_f.jpeg';
import img4_f from '../../img/img4_f.jpeg';
import img5_f from '../../img/img5_f.jpeg';
import img6_h from '../../img/img6_h.jpeg';
import img7_f_n from '../../img/img7_f_n.jpeg';
import img8_f_n from '../../img/img8_f_n.jpeg';
import img9_f from '../../img/img9_f.jpeg';
import img10_f_n from '../../img/img10_f_n.jpeg';
import img11_f_n from '../../img/img11_f_n.jpeg';
import img12_h from '../../img/img12_h.jpeg';
import img13_h from '../../img/img13_h.jpeg';
import img14_f_n from '../../img/img14_f_n.jpeg';
import img15_h from '../../img/img15_h.jpeg';
import img16_h from '../../img/img16_h.jpeg';
import img17_f from '../../img/img17_f.jpeg';
import img18_f_n from '../../img/img18_f_n.jpeg';
import img19_h from '../../img/img19_h.jpeg';
import img20_h from '../../img/img20_h.jpeg';
import img21_f from '../../img/img21_f.jpeg';
import img22_f from '../../img/img22_f.jpeg';
import img23_f from '../../img/img23_f.jpeg';

const products = [
  {id: '1', category: 'f', name: 'Producto 1', image: img1_f, descripcion:'Descripcion', price: 100},
  {id: '2', category: 'f', name: 'Producto 2', image: img2_f, descripcion:'Descripcion', price: 200},
  {id: '3', category: 'f', name: 'Producto 3', image: img3_f, descripcion:'Descripcion', price: 300},
  {id: '4', category: 'f', name: 'Producto 4', image: img4_f, descripcion:'Descripcion', price: 400},
  {id: '5', category: 'f', name: 'Producto 5', image: img5_f, descripcion:'Descripcion', price: 500},
  {id: '6', category: 'h', name: 'Producto 6', image: img6_h, descripcion:'Descripcion', price: 600},
  {id: '7', category: 'f_n', name: 'Producto 1', image: img7_f_n, descripcion:'Descripcion', price: 100},
  {id: '8', category: 'f_n', name: 'Producto 2', image: img8_f_n, descripcion:'Descripcion', price: 200},
  {id: '9', category: 'f', name: 'Producto 3', image: img9_f, descripcion:'Descripcion', price: 300},
  {id: '10', category: 'f_n', name: 'Producto 4', image: img10_f_n, descripcion:'Descripcion', price: 400},
  {id: '11', category: 'f_n', name: 'Producto 4', image: img11_f_n, descripcion:'Descripcion', price: 400},
  {id: '12', category: 'h', name: 'Producto 5', image: img12_h, descripcion:'Descripcion', price: 500},
  {id: '13', category: 'h', name: 'Producto 6', image: img13_h, descripcion:'Descripcion', price: 600},
  {id: '14', category: 'f_n', name: 'Producto 1', image: img14_f_n, descripcion:'Descripcion', price: 100},
  {id: '15', category: 'h', name: 'Producto 2', image: img15_h, descripcion:'Descripcion', price: 200},
  {id: '16', category: 'h', name: 'Producto 3', image: img16_h, descripcion:'Descripcion', price: 300},
  {id: '17', category: 'f', name: 'Producto 4', image: img17_f, descripcion:'Descripcion', price: 400},
  {id: '18', category: 'f_n', name: 'Producto 5', image: img18_f_n, descripcion:'Descripcion', price: 500},
  {id: '19', category: 'h', name: 'Producto 6', image: img19_h, descripcion:'Descripcion', price: 600},
  {id: '20', category: 'h', name: 'Producto 2', image: img20_h, descripcion:'Descripcion', price: 200},
  {id: '21', category: 'f', name: 'Producto 3', image: img21_f, descripcion:'Descripcion', price: 300},
  {id: '22', category: 'f', name: 'Producto 4', image: img22_f, descripcion:'Descripcion', price: 400},
  {id: '23', category: 'f', name: 'Producto 5', image: img23_f, descripcion:'Descripcion', price: 500},
]


export const Detail = () => {

  const { id } = useParams()
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true)

  


  useEffect(() => {
    setTimeout(() => {
      const filter = products.find((product) => product.id === id);
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
          {loading && <h2 className='text-center'>Cargando...</h2>}
          {products && !loading && (
            <div className='container d-flex mt-5 mb-5'>
              <div className="container-fluid w-25 ">
                <img className='w-100' src={product.image} alt="" />
              </div>
              <div className="row">
                <div className="container ms-5">
                  <div className="row">
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                    <p>{product.descripcion}</p>
                  </div>
                </div>
                <div className='container'>
                  <ItemCount initial={1} stock={5}/>
                </div>
                <div className='d-grid gap-2"'>
                  <button className="btn btn-outline-success ms-3" onClick={agregarAlCarrito}>Agregar al Carrito</button>
                  <button className="btn btn-outline-warning ms-3" onClick={()=>navigate('/Product')}>Segui Comprando</button>
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