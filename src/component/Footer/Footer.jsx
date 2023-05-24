import React from 'react'
import navbarlogo from '../../img/navbarlogo.png'
import { NavLink  } from 'react-router-dom';

export const Footer = () => {

  return (
    <>
      <div className="container-fluit bg-black text-center">
        <div className="row">
          <div className='col d-flex align-items-center'>
            <NavLink to='/'><img className='navbarLogo w-50' src={navbarlogo} alt="" /></NavLink>
          </div>
          <div className='col'>
            <h3>Nosotros</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique? Nobis eum nihil nam sapiente, rerum quaerat nemo laudantium maiores dicta nostrum, accusamus rem in? Nesciunt molestias mollitia delectus maxime.
            </p>
          </div>
          <div className='col fs-2 d-flex justify-content-evenly align-items-center'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
        <hr />
        <div className='d-flex align-items-center justify-content-center'>
          <p>Derechos Reservados <i className="bi bi-c-circle"></i> ginosgt@developer</p>
        </div>
      </div>
    </>
  )
}

export default Footer;