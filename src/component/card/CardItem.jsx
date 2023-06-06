import '../card/card.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CartItem = ({data}) => {
  const navigate = useNavigate ();

  return (
    <div className='card text-center animate__animated animate__fadeInUp'>
            <div className=" overflow">
              <img src={data.image} alt="" className='card_img card-img-top'/>
              <div className="card-body text-dark">
                <h3 className="text-marca card-title">{data.marca}</h3>
                <span className="card-title">{data.modelo}</span>
                <hr className='col-10 m-auto'/>
                <span className="card-title">${data.price}</span>
                <button type='button' className="btn border text-dark btn-btn-outline-dark rounded-0 m-1">Agregar al Carrito</button>
                <button onClick={() => navigate(`../../pages/ItemDetail/${data.id}`)}  type='button' className="btn border text-dark btn-btn-outline-dark rounded-0 m-1">Vista</button>
              </div>
            </div>
        </div>
  );
};

export default CartItem
