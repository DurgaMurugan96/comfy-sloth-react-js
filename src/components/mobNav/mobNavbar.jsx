import { Link } from 'react-router-dom'
import './mobNavbar.scss'
import Logo from '/src/assets/logo.svg';
import { IoClose } from 'react-icons/io5';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
export default function MobNavbar({ isActive = true, handleclose = () => { }, cart_count }) {
  const links = [
    { title: "Home", path: '/' },
    { title: "About", path: '/about' },
    { title: "Products", path: '/products' },
  ]
  return (
    <div className={`mobile_view_navbar ${isActive ? "isActive" : ""}`}>
      <div className="mob-view-menu-header d-flex align-items-center justify-content-between p-2 pt-4 pe-4">
        <Link to="/"><img src={Logo} alt="Logo" className='logo_size_icon1' /></Link>
        <IoClose size={37} onClick={handleclose} className="Ioclose_style" style={{ color: "#bb2525", marginLeft: "80px" }} />
      </div>

      <div className='moving_slide'>
        <ul>
          {links?.map((curr, idx) =>
            <Link
              className='menu_desgin'
              to={curr.path} onClick={handleclose} key={idx}>{curr.title}</Link>)}
        </ul>

        <ul className='cartStyle d-flex align-items-center justify-content-center gap-4'>
          <li>
            <Link className="lineremove" to="/cart" onClick={handleclose}>Cart  <span className='symbol'> <FaShoppingCart className='cart_icon' size={"23px"} /></span>
            </Link>
            <span className='carts_design'>{cart_count}</span>
          </li>
          <li>
            <Link className="lineremove" to="/Login" onClick={handleclose}>Login</Link>
            <FaUserPlus className='login_icon symbol' size={"23px"} />
          </li>
        </ul>

      </div >
    </div >
  )
}
