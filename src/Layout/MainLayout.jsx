import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'


const MainLayout = () => {
  return (
    <Fragment>
      <Navbar  />
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout