import React from 'react'
import ItemDetailContainer from '../component/ItemDetail/ItemDetailContainer'
import img1 from '../img/img1.jpeg'
import img2 from '../img/img2.jpeg'
import img3 from '../img/img3.jpeg'
import img4 from '../img/img4.jpeg'
import img5 from '../img/img5.jpeg'
import img6 from '../img/img6.jpeg'


export const ItemDetail = () => {

  const products = [
    { id: "1", name: 'Producto 1', image: img1, descripcion: 'Descripcion', price: 100 },
    { id: "2", name: 'Producto 2', image: img2, descripcion: 'Descripcion', price: 200 },
    { id: "3", name: 'Producto 3', image: img3, descripcion: 'Descripcion', price: 300 },
    { id: "4", name: 'Producto 4', image: img4, descripcion: 'Descripcion', price: 400 },
    { id: "5", name: 'Producto 5', image: img5, descripcion: 'Descripcion', price: 500 },
    { id: "6", name: 'Producto 6', image: img6, descripcion: 'Descripcion', price: 600 },
  ]

  return (
      <div className="d-flex">
        {products.map((product) => (
          <ItemDetailContainer key={product.id} {...product} />
        ))
        }
      </div>

  )
}

export default ItemDetail