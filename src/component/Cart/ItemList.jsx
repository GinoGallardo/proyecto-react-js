import React from 'react'
import CardItem from '../card/CardItem'

export const ItemList = ({data}) => {

  return (
    <>
      {data.map((prod) =>{
			return(
        <CardItem key={prod.id} data={prod}/>
        )
      })
    }
    </>
  )
}

export default ItemList