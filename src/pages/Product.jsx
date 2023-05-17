import '../pages/pages.css'
import { useReducer } from "react";
import ShoppingReduce, { shoppingInitialState } from "../component/Cart/ShoppingReduce";
import TYPES from "../component/Cart/shoppingAction";
import CardItem from "../component/card/CardItem";


const Product = () => {
    const [state, dispatch] = useReducer(
      ShoppingReduce,
      shoppingInitialState
      );

    const { products } = state;

    const addToCart = (id) =>{
      dispatch({type: TYPES.ADD_TO_CART, payload: id});
    }

  return (
    <div className="product">
      <h2 className="text-center">Productos</h2>
      <div className='container d-flex justify-content-center align-content-center'>
        <div className="row">
          <div className="col-md-4">
          {products.map((product) => (
          <CardItem key={products.id} data={product} addToCart={addToCart}/>
          ))}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Product