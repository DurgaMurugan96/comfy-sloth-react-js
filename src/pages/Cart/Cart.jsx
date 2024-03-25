import { useState, useEffect } from 'react';
import "../Cart/Cart.scss";
import { MdDelete } from "react-icons/md";
import Footer from '../Footer';

import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const handleDeleteItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleClearCart = (event) => {
        event.preventDefault();
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingFee = 5.34;
    const totalAmount = subtotal + shippingFee;

    const covertPrice = (price) => {
        const Tprice = Number(price) / 100;
        const formattedPrice = Tprice.toLocaleString(undefined, { maximumFractionDigits: 2 });
        return formattedPrice
    }
    return (
        <div>
            {
                cartItems?.length ? <>
                    {/* <TitleCart /> */}
                    <Breadcrumbs pages={'cart'} />
                    <table className='container display_container bg-primar'>
                        <thead>
                            <tr className='heading_style'>
                                <th style={{ marginLeft: "25%", display: "grid" }}>Item</th>
                                <th style={{ paddingRight: "70px" }}>Price</th>
                                <th style={{ paddingRight: "70px" }}>Quantity</th>
                                <th style={{ paddingRight: "70px" }}>Subtotal</th>
                            </tr>
                        </thead>
                        <tr>
                            <td colSpan="5"><hr /></td>
                        </tr>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="item-details_C  d-flex align-items-center gap-2">
                                            <img
                                                src={item?.images?.[0].url}
                                                alt={item.name}
                                                className='image_style_C'
                                                style={{ width: "100px", height: "75px", objectFit: "cover", borderRadius: "4px" }}
                                            />
                                            <div>
                                                <span className="items_style">{item.name}</span>
                                                <br />
                                                <div className='d-flex align-items-center gap-2'>
                                                    <span className="colorC">Color: </span>
                                                    <button
                                                        className="mx-1 color_bg"
                                                        style={{
                                                            background: item.selectedColor,
                                                            opacity: "0.6",
                                                            padding: "5px",
                                                            borderRadius: "0.25rem",
                                                            width: "12px",
                                                            height: "12px",
                                                        }}
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                    </td>
                                    <td className='Price_C'>${covertPrice(item?.price)}</td>
                                    <td>
                                        <div className="quantity-control">
                                            <button className="sign2" onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
                                            <span className='number2'>{item.quantity}</span>
                                            <button className="sign2" onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
                                        </div>
                                    </td>
                                    <td className='sub_c'>${item.price * item.quantity}</td>
                                    <td>
                                        <button className='bg_Color' onClick={() => handleDeleteItem(index)}>
                                            <MdDelete style={{ color: "white", marginLeft: "15%" }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5"><hr /></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="link-container container">
                        <a className="Continue_style" href="/products">Continue Shopping</a>
                        <button className="clear_Button" onClick={handleClearCart}>clear shopping cart</button>
                    </div>
                    <section className='d-flex justify-content-end container Cart_Shipping'>
                        <div >
                            <article className='border_CC'>
                                <h5 className='CC sub_C1'> Subtotal: <span className='sub_C1'>${subtotal}</span></h5>
                                <p className='CC ship_C1'>Shipping Fee: <span className='ship_C1'>${shippingFee}</span></p>
                                <hr />
                                <h4 className='CC order_C1' style={{ marginTop: "10%" }}> Order Total:<span className='order_C1'>${totalAmount}</span></h4>
                            </article>
                            <br />
                            <a className="login" href="#">LOGIN</a>
                        </div>
                    </section>

                </> :
                    <div className='Cart2'>
                        <div style={{ marginTop: "5%", marginBottom: "24%" }}>
                            <h2 className='fill_S'>Your cart is empty</h2>
                            <a href="/products" className='btn_S'>FILL IT</a>
                        </div>
                    </div>
            }
            <Footer />
        </div>
    );
}








































// import { useState, useEffect } from 'react';
// import TitleCart from "../CartTitle/TitleCart";
// import "../Cart/Cart.css";
// import { MdDelete } from "react-icons/md";
// import Footer from '../Footer';
// import { useParams } from 'react-router-dom'; // Import useParams

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [selectedColor, setSelectedColor] = useState('');

//     const params = useParams(); 

//     useEffect(() => {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCartItems(cart);
//     }, []);

//     useEffect(() => {
//         setSelectedColor(params.selectedColor); 
//     }, [params.selectedColor]);

//     const handleDeleteItem = (index) => {
//         const updatedCartItems = [...cartItems];
//         updatedCartItems.splice(index, 1);
//         setCartItems(updatedCartItems);
//         localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//     };

//     const handleQuantityChange = (index, newQuantity) => {
//         const updatedCartItems = [...cartItems];
//         updatedCartItems[index].quantity = newQuantity;
//         setCartItems(updatedCartItems);
//         localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//     };

//     const handleClearCart = (event) => {
//         event.preventDefault();
//         setCartItems([]);
//         localStorage.removeItem('cart');
//     };

//     const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//     const shippingFee = 5.34;
//     const totalAmount = subtotal + shippingFee;

//     return (
//         <div>
//             {
//                 cartItems?.length ? <>
//                     <TitleCart />
//                     <table className='container display_container'>
//                         <thead>
//                             <tr className='heading_style'>
//                                 <th style={{ marginLeft: "25%", display: "grid" }}>Item</th>
//                                 <th style={{ paddingRight: "70px" }}>Price</th>
//                                 <th style={{ paddingRight: "70px" }}>Quantity</th>
//                                 <th style={{ paddingRight: "70px" }}>Subtotal</th>
//                             </tr>
//                         </thead>
//                         <tr>
//                             <td colSpan="5"><hr /></td>
//                         </tr>
//                         <tbody>
//                             {cartItems.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>
//                                         <div className="item-details_C">
//                                             <img
//                                                 src={item?.images?.[0].url}
//                                                 alt={item.name}
//                                                 className='image_style_C'
//                                                 style={{ width: "100px", height: "75px", objectFit: "cover", borderRadius: "4px" }}
//                                             />
//                                             <span className="items_style">{item.name}</span>
//                                             <span className="color-info">Color: {item.selectedColor}</span>
//                                         </div>
//                                     </td>
//                                     <td className='Price_C'>${item.price}</td>
//                                     <td>
//                                         <div className="quantity-control">
//                                             <button className="sign2" onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
//                                             <span className='number2'>{item.quantity}</span>
//                                             <button className="sign2" onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
//                                         </div>
//                                     </td>
//                                     <td className='sub_c'>${item.price * item.quantity}</td>
//                                     <td>
//                                         <button className='bg_Color' onClick={() => handleDeleteItem(index)}>
//                                             <MdDelete style={{ color: "white", marginLeft: "15%" }} />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                         <tfoot>
//                             <tr>
//                                 <td colSpan="5"><hr /></td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                     <div className="link-container container">
//                         <a className="Continue_style" href="/products">Continue Shopping</a>
//                         <button className="clear_Button" onClick={handleClearCart}>clear shopping cart</button>
//                     </div>
//                     <section className='d-flex justify-content-end container Cart_Shipping'>
//                         <div >
//                             <article className='border_CC'>
//                                 <h5 className='CC sub_C1'> Subtotal: <span className='sub_C1'>${subtotal}</span></h5>
//                                 <p className='CC ship_C1'>Shipping Fee: <span className='ship_C1'>${shippingFee}</span></p>
//                                 <hr />
//                                 <h4 className='CC order_C1' style={{ marginTop: "10%" }}> Order Total:<span className='order_C1'>${totalAmount}</span></h4>
//                             </article>
//                             <br />
//                             <a className="login" href="#">LOGIN</a>
//                         </div>
//                     </section>

//                 </> :
//                     <div className='Cart2'>
//                         <div style={{ marginTop: "5%", marginBottom: "24%" }}>
//                             <h2 className='fill_S'>Your cart is empty</h2>
//                             <a href="/products" className='btn_S'>FILL IT</a>
//                         </div>
//                     </div>
//             }
//             <Footer />
//         </div>
//     );
// }

// export default Cart;






















