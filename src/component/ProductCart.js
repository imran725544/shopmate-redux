import React, { useEffect, useState } from "react";

import { add,remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import "./ProductCart.css";
const ProductCart = ({ product }) => {
  const cartList = useSelector((state) => state.cartState.cartList);

  const [isInCart , setIsInCart] = useState(false)

  const dispatch = useDispatch();

  const {id, image, name, price } = product;
  // console.log(product.image)

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === id)
    if(productInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    } 


  },[cartList,id])

  return (
    <div className="productcart">
      <img src={image} alt="pic" />
      <p className="name">{name}</p>

      <div className="action">
        <p>${price}</p>

        { isInCart ? (  <button onClick={() => dispatch(remove(product))}>Remove</button>) :(  <button onClick={() => dispatch(add(product))}>Add to Cart</button>)}
      
      </div>
    </div>
  );
};

export default ProductCart;
