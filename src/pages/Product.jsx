import '../pages/pages.css'
import { useState } from "react";
import ItemListContainer from '../component/Cart/ItemListContainer';


const Product = () => {
    const [state] = useState(
      ItemListContainer,
      );

    const { products } = state;

    // const addToCart = (id) =>{
    //   dispatch({type: TYPES.ADD_TO_CART, payload: id});
    // }

  return (
    <div className="container-fluit product">
      <div className="container col-12">
            <div className="row d-flex justify-content-center align-content-center">
            {products.map((product) => (
              <ItemListContainer/>
            // <CardItem key={products.id} data={product} addToCart={addToCart}/>
            ))}
            </div>
          </div>
    </div>
  )
}

export default Product