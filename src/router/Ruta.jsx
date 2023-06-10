import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Contacto from '../pages/Contacto'
import ItemDetail from '../component/ItemDetail/ItemDetail'
import Error404 from '../component/error/Error404'
import MainLayout from '../Layout/MainLayout'
import ItemDetailContainer from '../component/ItemDetailContainer/ItemDetailContainer'
import CartProvider from '../Context/CartContext'
import Cart from '../component/cart/Cart'
import ItemListContainer from '../component/ItemListContainer/ItemListContainer'

const Ruta = () => {

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='Product' element={<Product />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='/pages/ItemDetail/:id' element={<ItemDetail />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            <Route path='Cart' element={<Cart/>} />
          </Route>
          <Route>
            <Route path="*" Element={<Error404 />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default Ruta;