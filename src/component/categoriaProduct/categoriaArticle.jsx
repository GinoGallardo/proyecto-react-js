import React from "react";
// import Detail from '../ItemDetail/Detail'
// import { useNavigate } from "react-router-dom";

export const categoriaArticle = ({ articles }) => {

    // const navigate = useNavigate ();

    return (
        <div className="card">
            {articles.map(article => (
                <div key={article.id} className='card text-center bg-dark animate__animated animate__fadeInUp'>
                    <div className="overflow">
                        <img src={article.image} alt="" className='card_img card-img-top' />
                        <div className="card-body text-light">
                            <h5 className="card-title">{article.name}</h5>
                            <span className="card-title">${article.price}</span>
                            <p className="card-text text-secondary">{article.descripcion}</p>
                            <button type='button' className="btn text-white btn-btn-outline-light rounded-0 m-1">Agregar al Carrito</button>
                            {/* <button onClick={() => navigate(`/Detail/${article.id}`)} type='button' className="btn text-white btn-btn-outline-light rounded-0 m-1">Vista</button> */}
                        </div>
                    </div>
                </div>


                // <div className="article-container" key={article.id}>
                //     <div className="img-container">
                //         <img src={article.image} alt=''/>
                //     </div>
                //     <div className="article-body">
                //         <h2>{article.title}</h2>
                //         <p>{article.description}</p>
                //         <div className="article-footer">
                //             <span>{article.date} · </span>
                //             <span>{article.ReadingTime}</span>
                //         </div>
                //     </div>
                // </div>
            ))}
        </div>
    )
};
export default categoriaArticle