import React from 'react'
import CardItem from '../card/CardItem'

export const ItemList = ({data}) => {

  return (
      data.map(prod => <CardItem key={prod.id} data={prod}/>) 
  )
}

export default ItemList