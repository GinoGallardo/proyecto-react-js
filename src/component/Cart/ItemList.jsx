import React from 'react'
import Item from './Item'

export const ItemList = ({data =[]}) => {

  return (
    data.map(products => <Item key={products.id} info={products}/>)
  )
}

export default ItemList