import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>La Página que intenta acceder no exixte</h2>
      <p>ERROR 404</p>
      <div className="d-flex justify-content-center">
        <button onClick={()=> navigate(-1)} className='btn btn-outline-secondary'></button>
      </div>
    </div>
  )
}

export default Error404