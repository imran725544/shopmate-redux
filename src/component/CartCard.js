
import React from 'react'

import './CartCard.css';
export const CartCard = ({product}) => {
    const {name, price, image} = product
  return (
   <div className='cartcard'>
        <img src={image} alt={name} />
        <p className='productname'>{name}</p>
        <p className='productprice'>${price}</p>
        <button>Remove</button>
   </div>
  )
}
