import './stylecart.css'
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
    <div className="counter">
      <button disabled={count <=1} onClick={disminuye}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={incrementa}>+</button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount