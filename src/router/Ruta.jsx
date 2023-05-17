import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import ItemDetail from '../pages/ItemDetail'
import Navbar from '../component/Navbar/Navbar'
import NavbarAlert from '../component/Navbar/NavbarAlert'

const Ruta = () => {
  
  return (
    <BrowserRouter>
      <NavbarAlert/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/ItemDetail' element={<ItemDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ruta;