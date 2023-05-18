import './detail.css'
import React, { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial));
  
  const disminuye = () => {
    setCount(count - 1)
  }
  const incrementa  = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    setCount(parseInt(initial));
  },[initial])

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className='mb-3 ms-4 justify-content-center'>
          <p className=''>Agrega Producto</p>
          <button className='btn btn-outline-info' disabled={count <=1} onClick={disminuye}>-</button>
          <span className='fs-4 ms-3 me-3'>{count}</span>
          <button className='btn btn-outline-info' disabled={count >= stock} onClick={incrementa}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount