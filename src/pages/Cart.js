import {CartCard} from '../component/CartCard'
import { useSelector } from 'react-redux'
// import phone from '../assets/images/phone.jpg'
import { useTitle } from '../hooks/useTitle'

const Cart = () => {
  const products = useSelector(state => state.cartState.cartList )
  const total = useSelector(state => state.cartState.total )
  useTitle("Cart")
  
  return (
    <main>
      <section className='cart'>
      <h1>Cart Items: {products.length}/${total}</h1>
      {products.map((product) => (
        <CartCard key={product.id} product={product}/>
      ))}
      </section>
    </main>
  )
}

export default Cart
