import React from 'react'
import CardItem from '../card/CardItem'

export const ItemList = ({data =[]}) => {

  return (
    data.map(product => <CardItem key={product.id} info={product}/>)
  )
}

export default ItemList