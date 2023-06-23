import './navbar.css'
import React, { Fragment } from 'react'
import { NavbarLi } from './NavbarLi'
import CartWidget from '../CartWidget/CartWidget'
import NavbarAlert from './NavbarAlert'
import { NavLink } from 'react-router-dom'

export const Navbar = (props) => {

  const navbar_items = []

  return (
    <Fragment>
      <NavbarAlert />
      <nav className="navbar navbar-expand-lg bg-dark position-sticky position z-1">
        <div className="container-fluid">
          <button class="navbar-toggler color_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon color_hambueguesa"></span>
          </button>
          <NavLink to='/'><img className='d-none d-lg-flex navbarLogo w-50' src='https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/image%2Fnavbarlogo.png?alt=media&token=85a7cb49-73c2-451c-b840-991e72dee3b3&_gl=1*nhk5sd*_ga*MzI1MDU5MTE2LjE2ODU0MDI2NTA.*_ga_CW55HF8NVT*MTY4NjI4MDMwMy43LjEuMTY4NjI4MjAyOS4wLjAuMA..' alt="" /></NavLink>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavbarLi navbar_items={navbar_items} />
            </ul>
          </div>
          <div className='text-white m-1'>
              <CartWidget />
            </div>
        </div>
      </nav>

    </Fragment>
  )
}
export default Navbar;
