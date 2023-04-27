import {useState} from 'react'

const Carrito = () => {

  const [stock,setStock] = useState(0)


    const sumar = () => {setStock(stock + 1)}
    const restar = () => {setStock(stock - 1)}
    const reset = () => {setStock(0)}

  return (
    <div className='w-50 d-flex justify-content-around'>
      <div className="container btn-outline-danger">
        <span className='fs-1 bg-danger' onClick={restar}>-</span>
      </div>
      <h3 className='text-center'>Stock es : {stock}</h3>
      <div className="container">
        <span className='fs-1 bg-danger' onClick={sumar}>+</span>
      </div>
      <div className="container btn-danger">
        <button className='fs-1 bg-danger' onClick={reset}>Reset</button>
      </div>
    </div>
      
  )
}
export default Carrito;
