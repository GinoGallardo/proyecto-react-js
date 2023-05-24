import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Contacto from '../pages/Contacto'
import Detail from '../component/ItemDetail/Detail'
import Footer from '../component/Footer/Footer'
import Error404 from '../component/error/Error404'
import MainLayout from '../Layout/MainLayout'

const Ruta = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='Product' element={<Product/>} />
          <Route path='Contacto' element={<Contacto/>} />
          <Route path='/pages/ItemDetail/:id' element={<Detail/>} />
        </Route>
        <Route>
          <Route path='*' Element={<Error404/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Ruta;