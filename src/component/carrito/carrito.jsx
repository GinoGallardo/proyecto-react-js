import { useReducer } from "react";
import { Reducecart, compraInicialState } from "./Reducecart";
import Cardshop from "../card/cardshop";

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
        {productos.map((product) => <Cardshop/>)}
      </article>
      <h3>Carrito</h3>
      <article className="box"></article>
    </div>
  )
}

export default Carrito;