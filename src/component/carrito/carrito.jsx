import { useReducer } from "react";
import { Reducecart, compraInicialState } from "./Reducecart";
import Cardshop from "../card/Cardshop";

const Carrito = () => {
const [state,dispatch] = useReducer(Reducecart,compraInicialState);
const {productos, cart} = state;

const addToCart = () =>{}
const delFromCart = () =>{}
const clearCart = () =>{}

  return(
    <div>
      <h2>Carrito De Compra</h2>
      <h3>Producto</h3>
      <article className="box">
        {productos.map((productos) => (
        <Cardshop key={productos.id}data={productos}addToCart={addToCart}/>
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box"></article>
    </div>
  )
}

export default Carrito;