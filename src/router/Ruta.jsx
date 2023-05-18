import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Navbar from '../component/Navbar/Navbar'
import NavbarAlert from '../component/Navbar/NavbarAlert'
import Contacto from '../pages/Contacto'

const Ruta = () => {
  
  return (
    <BrowserRouter>
      <NavbarAlert/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Contacto' element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ruta;