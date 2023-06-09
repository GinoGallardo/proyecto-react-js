import '../pages/pages.css'
import { useState } from "react";
import ItemListContainer from '../component/ItemListContainer/ItemListContainer';


const Product = (props) => {
  const {id} = props;

    const [data] = useState([]);

  return (
    <div className="container-fluid product">
      <div className="container- col-12">
        <div className="row d-flex justify-content-center align-content-center">
          <ItemListContainer key={id} data={data}/>
        </div>
      </div>
    </div>
  )
}

export default Product