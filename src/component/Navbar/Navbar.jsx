import './navbar.css'
import React, { Fragment } from 'react'
import { NavbarLi } from './NavbarLi'
import { NavLink } from 'react-bootstrap'
import navbarlogo from '../../img/navbarlogo.png'

export const Navbar = (props) => {

  const navbar_items = []

  return (
    <Fragment>
      <nav className="navbar bg-dark navbar-expand-lg position-sticky position">
        <div className="container">
            <img className='navbarLogo' src={navbarlogo} alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav navbar-dark text-white justify-content-center">
                <NavbarLi navbar_items={navbar_items} />
              </ul>
            </div>  
        </div>
        <div className='text-white m-4'>
          <NavLink to='/src/component/Cart/ShoppingCart.jsx'><i className="bi bi-bag m-4 fs-4"></i></NavLink>
        </div>
      </nav>
      
      </Fragment>
  )
}
export default Navbar;
