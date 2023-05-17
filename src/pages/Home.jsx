import '../pages/pages.css'
import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import iconoweb from '../img/iconoweb.png'

export const Home = () => {
  return (
    <div className="home ">
      <div className='container-fluid '>
        <div className="row">
          <NavLink >
            <Image src={iconoweb}></Image>
          </NavLink>
          <NavLink>
            <Image src={iconoweb}></Image>
          </NavLink>
          <NavLink>
            <Image src={iconoweb}></Image>
          </NavLink>
          <NavLink>
            <Image src={iconoweb}></Image>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home;