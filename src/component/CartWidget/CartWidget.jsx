import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<>
			<Link className="container d-flex text-light text-decoration-none border"
						to='/Cart'>
				<i className="bi bi-cart3"></i>
				<span className="ms-2">{totalProducts() || ""}</span>
			</Link>
		</>
	);
};

export default CartWidget;
