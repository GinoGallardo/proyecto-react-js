import '../ItemDetail/detail.css'
import React, { useState, useEffect } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const disminuye = () => {
    setCount(count - 1)
  }
  const incrementa = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial])

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className='mb-0 ms-4 d-flex'>
          <button className='fs-6 btn btn-dark' disabled={count <= 0} onClick={disminuye}>-</button>
          <span className='fs-5 ms-1 me-1'>{count}</span>
          <button className='btn btn-dark fs-6' disabled={count >= stock} onClick={incrementa}>+</button>
        </div>
        <div className='container-fluid'>
        <button className="btn btn-outline-success mt-2 mb-2" disabled={count <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount