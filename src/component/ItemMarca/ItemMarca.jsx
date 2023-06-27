import React from 'react'
import { Link } from 'react-router-dom'

function ItemMarca() {

  const marca_items = [
    {
      path: "/marca/BRIGITTE",
      alt: 'MARCA BRIGITTE',
      img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fbrigitte.png?alt=media&token=80755a01-f8fa-437d-879a-f03269bc8aa6"

    },
    {
      path: "/marca/KIERO",
      alt: 'MARCA KIERO',
      img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fkiero.png?alt=media&token=c8ad8ddc-00e3-4134-951b-6cc57284ac67"
    },
    {
      path: "/marca/LARA",
      alt: 'MARCA LARA',
      img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Flara_teens.png?alt=media&token=bab83bd4-b0e0-4412-8eba-802db3632c5b"
    },
    {
      path: "/marca/LODY",
      alt: 'MARCA LODY',
      img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Flody.png?alt=media&token=a17f8d85-53ed-4c09-a208-92775efbbdb1"
    },
    {
      path: "/marca/KOURY",
      alt: 'MARCA KOURY',
      img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fmarcela_koury.png?alt=media&token=cd377235-be54-4e77-951c-3267141e1d1b"
    },
    {
      path: "/marca/MAREY",
      alt: 'MARCA MAREY',
      img: "https://firebasestorage.googleapis.com/v0/b/proyecto-react-js-d394a.appspot.com/o/marcas%2Fmarey.png?alt=media&token=7df6beb6-e81d-4fa3-b90f-8d89e41580f2"
    },
  ]

  return (
    <>
      {
        marca_items.map(({ path, alt, img }, index) => (
          <Link className='col-12 col-lg-4 btn flex-wrap' key={index} to={path}>
            <img className='w-100' src={img} alt={alt} />
          </Link>

        ))
      }
    </>
  )
}

export default ItemMarca