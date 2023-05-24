import { useState } from 'react'
import React from 'react'
import Products from '../Data/Products'
import CardItem from '../card/CardItem'

export const ItemList = () => {
  const [data]=useState(Products);

  return (
    <>
      {data.map((Products) =>{
      const {id}=data;
			return(
        <CardItem key={id} data={Products}/>
        )
      })
    }
    </>
  )
}

export default ItemList