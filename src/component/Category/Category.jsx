import '../Category/category.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

  return (
    <>
      <div className="container-fluid d-none d-lg-flex ">
        <div className="d-grid gap-3">
          <Link className="btn btn-dark" to="/Product">
            Todo
          </Link>
          <Link className="btn btn-outline-dark" to="/categoria/Mujer_Children">
            Niña
          </Link>
          <Link className="btn btn-outline-dark" to="/categoria/Mujer">
            Mujer
          </Link>

          <Link className="btn btn-outline-dark" to="/categoria/Hombre">
            Hombre
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;


