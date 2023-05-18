import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const CartWidget = () => {
  const navigate = useNavigate()

  return (
    <Link onClick={()=>navigate('/Product')} ><i className="bi bi-bag m-4 fs-4"></i></Link>
    
  )
}

export default CartWidget