import React from 'react'
import CardItem from '../component/card/CardItem'

export const ItemList = ({data =[]}) => {

  return (
    data.map(products => <CardItem key={products.id} info={products}/>)
  )
}

export default ItemList