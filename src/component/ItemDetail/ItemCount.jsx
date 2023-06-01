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
        <div className='mb-0 ms-4 justify-content-center'>
          <p className=''>Agrega Producto</p>
          <button className='btn btn-dark' disabled={count <=1} onClick={disminuye}>-</button>
          <span className='fs-5 ms-3 me-3'>{count}</span>
          <button className='btn btn-dark' disabled={count >= stock} onClick={incrementa}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount