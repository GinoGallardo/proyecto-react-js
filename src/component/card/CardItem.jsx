import './card.css'
import { NavLink } from 'react-router-dom';
import 'animate.css/animate.min.css'

const CardItem = ({data, addToCart}) => {
    let {id, name, image, descripcion, price} = data;

    return (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
            <div className="overflow">
            <img src={image} alt="" className='card-img-top'/>
            </div>
            <div className="card-body text-light">
            <h5 className="card-title">{name}</h5>
                <span className="card-title">${price}</span>
                <p className="card-text text-secondary">{descripcion}</p>
                <button href="#" className="btn btn-primary" onClick={()=> addToCart(id)}>Agregar al Carrito</button>
                <NavLink href="#" className="btn btn-btn-outline-light rounded-0">Vista</NavLink>
            </div>
        </div>
    )
}

export default CardItem;