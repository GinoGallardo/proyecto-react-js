import '../card/card.css'
import React from 'react'

export const Item = (props) => {
  const {id, image, name, price, descripcion} = props;

  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
            <div className="overflow">
              <img src={image} alt="" className='card_img card-img-top'/>
              <div className="card-body text-light">
                <h5 className="card-title">{name}</h5>
                <span className="card-title">${price}</span>
                <span>Mostrame el  ${id}</span>
                <p className="card-text text-secondary">{descripcion}</p>
                <button type='button' className="btn text-white btn-btn-outline-light rounded-0 m-1">Agregar al Carrito</button>
                <button type='button' className="btn text-white btn-btn-outline-light rounded-0 m-1">Vista</button>
              </div>
            </div>
        </div>
  );
};

export default Item
