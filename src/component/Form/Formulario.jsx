import React, { useState } from 'react'
import { useCartContext } from "../../Context/CartContext";

export const Formulario = (props) => {

  const {total, compras} = props;
  const {totalPrice } = useCartContext();

  const [form, setForm] = useState({
    buyer: {
			name: "",
			email: "",
			phone: "",
			address: "",
		},
		// items: cart.map((product) => ({
		// 	id: product.id,
		// 	title: product.marca,
		// 	price: product.price,
		// 	quantity: product.quantity,
		// })),
		total,
    items:compras
  })
  const handleChange = (e) => {
    const {name,value} = e.target
    setForm({
      ...form,
      buyer:{
        ...form.buyer,
        [name]:value
      }
    })
  }

  return (
    <div className='countainer mt-5'>
      <div className="row">
        <p className="me-3 text-dark text-center"><strong>Total a Pagar es:</strong> $ {totalPrice()}</p>
        <form action="" className='d-flex flex-column gap-4 justify-content-center align-items-center'>
        <input onChange={handleChange} type="text" name='name' placeholder='Nombre Completo'/>
        <input onChange={handleChange} type="email" name='email' placeholder='xxxxx@xxxx.com'/>
        <input onChange={handleChange} type="number" name='phone' placeholder='Número de Contacto'/>
        <input onChange={handleChange} type="text" name='address'placeholder='Dirección'/>
        <button type='submit'>Comprar</button>
      </form>
      </div>
    </div>
  )
}
export default Formulario
