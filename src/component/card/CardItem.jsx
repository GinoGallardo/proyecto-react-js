import '../card/card.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CartItem = ({info}) => {
  const navigate = useNavigate()
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
            <div className="overflow">
              <img src={info.image} alt="" className='card_img card-img-top'/>
              <div className="card-body text-light">
                <h5 className="card-title">{info.name}</h5>
                <span className="card-title">${info.price}</span>
                <p className="card-text text-secondary">{info.descripcion}</p>
                <button type='button' className="btn text-white btn-btn-outline-light rounded-0 m-1">Agregar al Carrito</button>
                <button onClick={()=>navigate(`/Detail/${info.id}`)} type='button' className="btn text-white btn-btn-outline-light rounded-0 m-1">Vista</button>
              </div>
            </div>
        </div>
  );
};

export default CartItem
