import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarLi = (props) => {
  // const {navbar_items} = props
  const navbar_items = [
    {
      path:"/",
      name:"Home"
    },
    {
      path:"/Product",
      name:"Productos"
    },
    {
      path:"/ItemDetail",
      name:<i className="bi bi-bag m-4 fs-4"></i>
    }
  ]

  return (
    <Fragment>
      {
      navbar_items.map(({path,name},index)=>(
        <li key={index} className='nav-item'>
          <NavLink className={'nav-link '} to={path}>{name}</NavLink>
        </li>
      ))
    }
    </Fragment>
  )
}
export default NavbarLi;
