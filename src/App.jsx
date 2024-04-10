import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import SingleProduct from './pages/products/singleproduct/singleProduct'
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import Logo from '../src/assets/logo.svg';
import { useState } from 'react';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import MobNavbar from './components/mobNav/mobNavbar';
import { useSelector } from 'react-redux';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const { cart_count } = useSelector(state => state.cart);
  return (
    <>
      <nav className='Navbar_style '>
        <div className="container-xl nav_content ">
          <Link to="/">
            <img src={Logo} alt="" className='logo_size_icon' />
          </Link>
          <ul className={'nav-links'} onClick={() => setIsMobile(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <div className='cart_login'>
            <li>
              <Link to="/cart">Cart</Link>
              <Link to="/cart">
                <span className='cart_design'>
                  {cart_count}
                </span>
                <FaShoppingCart className='cart_icon' size={"23px"} style={{ marginTop: "-8%", marginLeft: "5px" }} />
              </Link >
            </li>
            <li>
              <Link to="/Login">Login</Link>
              <FaUserPlus className='login_icon' size={"23px"} style={{ marginTop: "-10%", marginLeft: "5px" }} />
            </li>
          </div>

          <button className='mob-menu-icon' onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <IoClose size={37} style={{ color: "red" }} /> : <IoMenuSharp size={37} style={{ color: "rgb(171, 122, 95)" }} className='menu_icons' />}
          </button>
        </div>
      </nav>

      <MobNavbar handleclose={() => setIsMobile(false)} isActive={isMobile} cart_count={cart_count} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" >
          <Route index element={<Products />} />
          <Route path=':id' element={<SingleProduct />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <header>
      </header>
    </>
  )
}
export default App






