import React from 'react'
import './ProductCart.css';
const ProductCart = ({product}) => {

  const {image, name, price} = product
  console.log(product.image)

  return (
    <div className='productcart'>
        <img src={image} alt="pic"/>
      <p className='name'>{name}</p>

      <div className='action'>
      <p>${price}</p>
      <button>Add to Cart</button>
      </div>

    </div>
  )
}

export default ProductCart