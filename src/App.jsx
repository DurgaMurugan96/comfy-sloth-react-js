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

function App() {
  return (
    <>
      <nav className='navbar com_container container'>
        <img src={Logo} alt="" className='logo_size' />
        <ul className='menu d-flex justify-content-center gap-4 ' >
          <li className='menu1'>
            <Link to="/">Home</Link>
          </li>
          <li className='menu1'>
            <Link to="/about">About</Link>
          </li>
          <li className='menu1'>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <ul className=' menu d-flex justify-content-end gap-2'>
          <li className='menu2'>
            <Link to="/cart">Cart</Link>
            {/* <FaShoppingCart className='cart_icon' /> */}
          </li>
          <li className='menu2'>
            <Link to="/Login">Login</Link>
            <FaUserPlus className='login_icon' />
          </li>
        </ul>
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







