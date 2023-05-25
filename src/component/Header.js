
import {Link,NavLink,} from "react-router-dom"
import Logo from '../assets/images/logo.png'
import './Header.css'

const Header = () => {
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
        <span>Cart:2</span>
        </Link>

    </header>
  )
}

export default Header