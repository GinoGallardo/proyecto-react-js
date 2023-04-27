import React, { Fragment } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from '../component/Navbar/Navbar'

const Container = (props) => {
  return (
    <Fragment>
      <Navbar items = {['Inicio','Productos','Contacto']} />
        {props.children}
      <Footer/>
    </Fragment>
  );
};

export default Container;
