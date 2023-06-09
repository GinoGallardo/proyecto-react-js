import './navbar.css'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarLi = (props) => {

  const navbar_items = [
    {
      path:"/",
      name:"Marcas"
    },
    {
      path:"/Product",
      name:"Productos"
    },
    {
      path:"/Contacto",
      name: 'Contácto'
    }
  ]

  return (
    <Fragment>
      {
      navbar_items.map(({path,name},index)=>(
        <li key={index} className='nav-item'>
          <NavLink className={'nav_hover nav-link'} to={path}>{name}</NavLink>
        </li>
      ))
    }
    </Fragment>
  )
}
export default NavbarLi;
