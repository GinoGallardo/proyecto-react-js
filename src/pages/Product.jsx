import '../pages/pages.css'
import { useState } from "react";
import ItemListContainer from '../component/Cart/ItemListContainer';


const Product = (props) => {
  const {id, image, name, price, descripcion} = props;

    const [data] = useState([]);

    const { products } = data;

  return (
    <div className="container-fluit product">
      <div className="container- col-12">
        <div className="row d-flex justify-content-center align-content-center">
          <ItemListContainer key={id} data={data}/>
        </div>
      </div>
    </div>
  )
}

export default Product


// import { useState } from 'react';
// import data from '../component/dataProducts/data';

// const Product = () => {
	  
//   const allCategories = [
//     'ALL',
//     ...new Set( data.map(article => article.category))
//   ];

//   const [categories, setCategories] = useState(allCategories)
//   const [articles, setArticles] = useState(data)

//   const filterCategory = (category) => {
//     if (category === 'ALL'){
//       setCategories(data)
//       return
//     }

//     const filteredData =data.filter(article => article.category === category)
//     setArticles(filteredData)
//   }

// 	return (
// 		<>
//     <div>gino</div>
// 			<categoriaButton categories={categories} filterCategory={filterCategory}/>
// 			<categoriaArticle articles={articles}/>
// 		</>
// 	);
// }

// export default Product;
