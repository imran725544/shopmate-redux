
import {Link,NavLink,} from "react-router-dom"
import { useSelector } from "react-redux"
import Logo from '../assets/images/logo.png'
import './Header.css'

const Header = () => {
  const cartList = useSelector( state => state.cartState.cartList )
  return (
    <header>
      <Link to="/" className="logo">
      <img src={Logo} alt="logo" />
      <span> ShopMate</span>
      </Link>

      <nav>
        <NavLink to="/" className="link" end> Home</NavLink>
        <NavLink to="/cart" className="link"> Cart</NavLink>
      </nav>
      
      <Link to="/" className="items">
        <span>Cart:{cartList.length}</span>
        </Link>

    </header>
  )
}

export default Header