import '../Item/card.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Item = ({ data }) => {

  const navigate = useNavigate();

  return (
    <div className='card d-flex justify-content-center animate__animated animate__fadeInUp'>
      <div className="overflow">
        <div className="">
          <img src={data.image} alt="" className='card_img card-img-top' />
        </div>
        <div className="card-body text-dark ms-2">
          <h3 className=" text-marca card-title">{data.marca}</h3>
          <span className="h6">{data.modelo}</span>
          <hr className='col-11 m-auto mt-1' />
          <div className="container d-flex justify-content-center align-items-center">
            <span className="h6 me-2">${data.price}</span>
            <button onClick={() => navigate(`/detalle/${data.id}`)} type='button' className="btn text-dark btn-outline-dark rounded-0 m-1">Vista</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item
