import React from 'react';
import { useCartContext } from '../../Context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
            <div className="container d-flex justify-content-center col-lg-2">
                <img className='w-75' src={product.image} alt={product.title} />
            </div>
            <div className="container ms-5 mt-2 d-lg-flex justify-content-between align-items-center col-lg-8">
                <p className='h2'>{product.marca}</p>
                <p className='h6'>Cantidad: {product.quantity}</p>
                <p className='h6'>Precio u.: ${product.price}</p>
                <p className='h6'>Subtotal: ${product.quantity * product.price}</p>
                <div>
                <button className='btn btn-outline-dark' onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ItemCart