import './navbar.css'
import React, { Fragment } from 'react'
import { NavbarLi } from './NavbarLi'
import CartWidget from '../CartWidget/CartWidget'
import NavbarAlert from './NavbarAlert'

export const Navbar = (props) => {

  const navbar_items = []

  return (
    <Fragment>
      <NavbarAlert/>
      <nav className="navbar z-1 navbar-expand-lg bg-dark position-sticky position">
        <div className="container">
            <img className='navbar-brand navbarLogo' src='https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/image%2Fnavbarlogo.png?alt=media&token=85a7cb49-73c2-451c-b840-991e72dee3b3&_gl=1*nhk5sd*_ga*MzI1MDU5MTE2LjE2ODU0MDI2NTA.*_ga_CW55HF8NVT*MTY4NjI4MDMwMy43LjEuMTY4NjI4MjAyOS4wLjAuMA..' alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav nav-underline navbar-dark justify-content-center">
                <NavbarLi navbar_items={navbar_items} />
              </ul>
            </div> 
            <div className='text-white m-4'>
          <CartWidget/>
        </div>
        </div>
      </nav>
      
      </Fragment>
  )
}
export default Navbar;
