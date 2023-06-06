import './pages.css'
import React, { Fragment } from 'react'
import ItemDetailContainer from '../component/ItemDetail/ItemDetailContainer'

export const ItemDetail = ({data}) => {

  return (
    <Fragment>
        {data.map((prod) => (
          <ItemDetailContainer key={prod.id} data{...prod} />
        ))
        }
    </Fragment>
  )
}

export default ItemDetail