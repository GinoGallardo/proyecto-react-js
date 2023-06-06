import '../Category/category.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

  return (
    <>
      <div className="container-flud d-flex justify-content-center align-items-center">
        <div className="row">
          <Link className="nav_link" to="/Product">
            Todo
          </Link>
          <Link className="nav__link" to="/categoria/Mujer">
            Mujer
          </Link>

          <Link className="nav__link" to="/categoria/Hombre">
            Hombre
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;


