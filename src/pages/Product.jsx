import '../pages/pages.css'
import { useState } from "react";
import ItemListContainer from '../component/Cart/ItemListContainer';


const Product = () => {
    const [data] = useState([]);

    const { products } = data;

  return (
    <div className="container-fluit product">
      <div className="container col-12">
            <div className="row d-flex justify-content-center align-content-center">
            {products.map((product) => (
              <ItemListContainer key={products.id} data={product}/>
            ))}
            </div>
          </div>
    </div>
  )
}

export default Product