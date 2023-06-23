import React from 'react'
import 'animate.css';
import { NavLink  } from 'react-router-dom';

export const Footer = () => {

  return (
    <>
      <div className="container-fluid text-light bg-dark text-center">
        <div className="row p-1 d-md-flex">
          <div className='col-md d-flex justify-content-center align-items-center'>
            <NavLink to='/'><img className='navbarLogo' src='https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/image%2Fnavbarlogo.png?alt=media&token=85a7cb49-73c2-451c-b840-991e72dee3b3&_gl=1*nhk5sd*_ga*MzI1MDU5MTE2LjE2ODU0MDI2NTA.*_ga_CW55HF8NVT*MTY4NjI4MDMwMy43LjEuMTY4NjI4MjAyOS4wLjAuMA..' alt="" /></NavLink>
          </div>
          <div className='d-none d-md-inline col-md align-items-center animate__rubberBand'>
            <h3>Nosotros</h3>
            <p>
              Vendedora lider  en <strong>Lencería</strong>, trabajamos con las mejores marcas del mercado y contamos con una gran variedad de modelos.
            </p>
          </div>
          <div className='col-md fs-2 d-flex justify-content-evenly align-items-center'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
        <hr className='m-0 pt-2' />
        <div className='d-flex align-items-center justify-content-center'>
          <p>Derechos Reservados <i className="bi bi-c-circle"></i> ginosgt@developer</p>
        </div>
      </div>
    </>
  )
}

export default Footer;