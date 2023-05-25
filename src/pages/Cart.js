import {CartCard} from '../component/CartCard'
import phone from '../assets/images/phone.jpg'
import { useTitle } from '../hooks/useTitle'

const Cart = () => {
  useTitle("Cart")
  const products = [
    {id:1, "name": "sony bluetooth wireless","price":149, "image":phone},
    {id:2, "name": "sony-latext bluetooth wireless","price":144, "image":phone}
  ]
  return (
    <main>
      <section className='cart'>
      <h1>Cart Items: {products.length}</h1>
      {products.map((product) => (
        <CartCard key={product.id} product={product}/>
      ))}
      </section>
    </main>
  )
}

export default Cart