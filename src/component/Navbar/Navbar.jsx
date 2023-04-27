import React from 'react'
import { NavbarLi } from './NavbarLi'

export const Navbar = (props) => {

  const items = ['Inicio','Productos','Contacto']

  return (
      <nav className="col-12 navbar navbar-expand-lg bg-transparent">
        <div className="container container-lg d-flex">
          <div>
            <h1>Ropa Interior</h1>
          </div>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              {props.items?.map((texto,index) => (
                <NavbarLi key={index} texto={texto} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='m-4'>
          <a href='#'><i className="bi bi-bag m-4 fs-4"></i></a>
          
        </div>
      </nav>
  )
}
export default Navbar;
