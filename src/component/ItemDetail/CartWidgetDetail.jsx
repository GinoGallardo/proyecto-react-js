import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CartWidgetDetail = (props) => {
    const {id, image, name, price, descripcion } = props;
    const navigate = useNavigate()


    return (
      <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className="overflow">
          <img src={image} alt="" className='card_img card-img-top' />
          <div className="card-body text-light">
            <h5 className="card-title">{name}</h5>
            <span className="card-title">${price}</span>
            <p className="card-text text-secondary">{descripcion}</p>
            <button onClick={()=>navigate(`/src/component/ItemDetail/Detail/${id}`)} className="btn text-white btn-btn-outline-light rounded-0 m-1">Vista</button>
          </div>
        </div>
      </div>
  )
}

export default CartWidgetDetail