import { Link } from 'react-router-dom'
import './mobNavbar.scss'
import Logo from '/src/assets/logo.svg';
import { IoClose } from 'react-icons/io5';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
export default function MobNavbar({ isActive = true, handleclose = () => { }, cart_count }) {
  return (
    <div className={`mobile_view_navbar ${isActive ? "isActive" : ""}`}>
      <button onClick={handleclose} className='logoheader'>
        <Link to="/">
          <img src={Logo} alt="" className='logo_size_icon1' />
        </Link>
        <IoClose size={37}  className="Ioclose_style" style={{ color: "#bb2525", marginLeft: "80px" }} />
      </button>
      <div className='moving_slide'>

        <button onClick={handleclose} className='menu_desgin'>
          <ul>
            <Link className='menu_desgin' to="/">Home</Link>
            <Link className='menu_desgin' to="/about">About</Link>
            <Link className='menu_desgin' to="/products">Products</Link>
          </ul>
        </button>
        <button onClick={handleclose} className='cartStyle'>
          <ul className='cartStyle'>
            <li>
              <Link className="lineremove" to="/cart">Cart </Link>
              <Link className="lineremove symbol" to="/cart">
                <FaShoppingCart className='cart_icon' size={"23px"} />
              </Link >
              <span className='carts_design'>{cart_count}</span>
            </li>
            <li>
              <Link className="lineremove" to="/Login">Login</Link>
              <FaUserPlus className='login_icon symbol' size={"23px"} />
            </li>
          </ul>
        </button>
      </div >
    </div >
  )
}
