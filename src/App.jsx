import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart/Cart';
// import Login from './pages/Login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import SingleProduct from './pages/products/singleproduct/singleProduct'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Logo from '../src/assets/logo.svg';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from 'react-icons/io5';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className='Navbar_style '>
        <div className="container-xl nav_content ">
          <img src={Logo} alt="" className='logo_size_icon' />
          <ul className={isMobile ? 'nav-links-mob' : 'nav-links'} onClick={() => setIsMobile(false)}>
            {/* <ul className={"nav-links"} onClick={() => setIsMobile(false)}> */}
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
              <FaShoppingCart className='cart_icon' />
            </li>
            <li>
              <Link to="/Login">Login</Link>
              <FaUserPlus className='login_icon' />
            </li>
          </div>

          <button className='mob-menu-icon' onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <IoClose size={37} style={{ color: "red" }} /> : <TiThMenu size={37} style={{ color: "rgb(171, 122, 95)" }} />}
          </button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" >
          <Route index element={<Products />} />
          <Route path=':id' element={<SingleProduct />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
      <header>
      </header>
    </>
  )
}
export default App






