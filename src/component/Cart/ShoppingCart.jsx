import { useReducer } from "react";
import ShoppingReduce, { shoppingInitialState } from './ShoppingReduce';
import TYPES from "./shoppingAction";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(
    ShoppingReduce,
    shoppingInitialState
  );

const {cart} = state;

const delFromCart = (id, all = false) =>{
  if(all){
    dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
  }else{
    dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
  }
};

const clearCart = () =>{
  dispatch({type: TYPES.CLEAR_CART});
}

  return(
    <div>
      <h2>Carrito De Compra</h2>
      <article className="">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          cart.map((item,index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  )
}

export default ShoppingCart;