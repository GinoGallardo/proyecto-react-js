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
      <div className="row p-0 d-flex justify-content-center">
        <div className='mb-0 ms-4 justify-content-center'>
          <button className='btn btn-dark' disabled={count <= 1} onClick={disminuye}>-</button>
          <span className='fs-5 ms-3 me-3'>{count}</span>
          <button className='btn btn-dark' disabled={count >= stock} onClick={incrementa}>+</button>
        </div>
        <div>
        <button className="btn btn-outline-success mt-2 mb-2" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount