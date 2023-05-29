
import React from 'react'

import {remove} from '../store/cartSlice'
import { useDispatch } from 'react-redux';

import './CartCard.css';
export const CartCard = ({product}) => {

  const dispatch = useDispatch()
    const {name, price, image} = product
  return (
   <div className='cartcard'>
        <img src={image} alt={name} />
        <p className='productname'>{name}</p>
        <p className='productprice'>${price}</p>
        <button onClick={() => dispatch(remove(product))}>Remove</button>
   </div>
  )
}
