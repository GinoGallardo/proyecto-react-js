import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import ItemCart from "../ItemCart/ItemCart";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({data}) => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Pablo",
			email: "Pablo@gmail.com",
			phone: "123123",
			address: "asdd",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.marca,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
				<div className="container text-center mt-5 vh-100">
				<p>No hay elementos en el carrito</p>
				<Link className="text-decoration-none btn btn-outline-dark" to="/Product">Hacer Compras</Link>
				</div>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<hr className="me-2 ms-2 me-lg-5 ms-lg-5" />
			<div className="container d-lg-flex justify-content-end align-items-center me-5 mb-5">
			<p className="me-3 text-dark"><strong>Total:</strong> $ {totalPrice()}</p>
			<Link to='/Formulario' className="btn btn-outline-dark" onClick={handleClick}>Emitir compra</Link>
			</div>
		</>
	);
};

export default Cart;
