import './detail.css'
import React from 'react'
import Select from 'react-select'

const itemSelect = [
  {label:'Gino', value:'Gino'},
  {label:'Karina', value:'Karina'},
  {label:'Natasha', value:'Natasha'}
]

export const ItemSelect = () => {

  const handleSelectChange = (e)=>{

  }

  return (
    <div className='style_select'>
      <Select
        options={itemSelect}
        onChange={handleSelectChange}
      />
    </div>
  )
}

export default ItemSelect