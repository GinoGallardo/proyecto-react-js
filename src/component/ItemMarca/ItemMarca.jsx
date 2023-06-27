import React from 'react'
import { Link } from 'react-router-dom'
import './ItemMarca.css';

function ItemMarca() {
  return (
    <>
      <Link className="hover" to="/marca/BRIGITTE">
        <img className="hover" src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fbrigitte.png?alt=media&token=80755a01-f8fa-437d-879a-f03269bc8aa6" alt="" />
      </Link>
      <Link className="hover" to="/marca/KIERO">
        <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fkiero.png?alt=media&token=c8ad8ddc-00e3-4134-951b-6cc57284ac67" alt="" />
      </Link>
      <Link className="hover" to="/marca/LARA">
        <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Flara_teens.png?alt=media&token=bab83bd4-b0e0-4412-8eba-802db3632c5b" alt="" />
      </Link>
      <Link className="hover" to="/marca/LODY">
        <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Flody.png?alt=media&token=a17f8d85-53ed-4c09-a208-92775efbbdb1" alt="" />
      </Link>
      <Link className="hover" to="/marca/KOURY">
        <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fmarcela_koury.png?alt=media&token=cd377235-be54-4e77-951c-3267141e1d1b" alt="" />
      </Link>
      <Link className="hover" to="/marca/MAREY">
        <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fmarey.png?alt=media&token=7df6beb6-e81d-4fa3-b90f-8d89e41580f2" alt="" />
      </Link>
    </>
  )
}

export default ItemMarca