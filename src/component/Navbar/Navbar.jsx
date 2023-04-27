import React from 'react'
import { NavbarLi } from './NavbarLi'

export const Navbar = (props) => {
  return (
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid d-block d-lg-flex">
          <div>
            <h1>Susana Prado</h1>
          </div>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <NavbarLi navbarLi={"Home"}/>
                <NavbarLi navbarLi={"Productos"}/>
                <NavbarLi navbarLi={"Contacto"}/>
              </ul>
            </div>
          </div>
          <div>
            <a href='../carrito/carrito.jsx'><i className="bi bi-bag m-5 fs-4"></i></a>
          </div>
        </div>
      </nav>
  )
}
