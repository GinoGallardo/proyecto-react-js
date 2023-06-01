import './Contacto.css'
import React from 'react'

export const Contacto = () => {
  return (
    <>
      <hr className='m-0' />
      <div className="Container contacto bg-dark">
      <div className="row col-12 p-2">
        <h2 className="text-center">Contáctame</h2>
      </div>
      <div className="container d-md-flex pb-3">
        <div className="row col-md-5 mb-5 mb-lg-0">
          <h3 className="text-center">Ingresa tus Datos:</h3>
          <div className='Container mb-3 mb-lg-0 d-md-flex'>
            <h4 className='mb-0'><strong>Email:</strong></h4>
            <p className='mb-0'>xxxxx@gmail.com</p>
          </div>
          <div className="container d-flex">
            <h4 className='mb-0'><strong>Telefono:</strong></h4>
            <p className='mb-0'>11-xxxx-xxxx</p>
          </div>
        </div>
        <form className="row col-md-7">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" required class="form-control" id="email" placeholder="name@example.com">
            </input>
          </div>
          <div class="mb-3">
            <label for="textarea" class="form-label">Dejame tu mensaje:</label>
            <textarea class="form-control" required id="textarea" rows="3"></textarea>
          </div>
          <div className='d-flex justify-content-end'>
            <input className='btn btn-secondary btn-sm' type="button" value='Enviar' />
          </div>
        </form>
      </div>
    </div>
      <hr className='m-0' />
    </>
  )
}

export default Contacto
