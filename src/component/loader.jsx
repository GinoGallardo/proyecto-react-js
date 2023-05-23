import React from 'react';
import img1 from '../img/img1.jpeg'
import img2 from '../img/img2.jpeg'

const Loader = ({ loading }) => {
  return loading ? <img src={img1} alt=""/>;
  
};

export default Loader;
