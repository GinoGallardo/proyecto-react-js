import {Fragment} from 'react'

export const NavbarLi = (props) => {
  return (

      <li className="nav-item">
        <a className="nav-link" aria-current="page" href='#'>
          {props.texto}
        </a>
      </li>
  
  )
}
