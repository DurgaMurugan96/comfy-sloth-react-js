import { useState, useEffect } from 'react';
import "../Cart/Cart.scss";
import { MdDelete } from "react-icons/md";
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { useDispatch } from 'react-redux';
import { setCartDecrement, setCartDelete, setCartIncrement } from '../../store/slice/counterSlice';


export default function Cart() {
    const dispatch = useDispatch()
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const handleDeleteItem = (index, quantity) => {
        dispatch(setCartDecrement({ value: quantity }))
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleQuantityChange = (index, newQuantity, type) => {
        switch (type) {
            case 'inc':
                dispatch(setCartIncrement({ value: 1 }))
                break;
            case 'dec':
                dispatch(setCartDecrement({ value: 1 }))
                break;
            default:
                break;
        }
        const updatedCartItems = [...cartItems];
        // dispatch(setCartIncrement({ value: newQuantity }))
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleClearCart = (event) => {
        dispatch(setCartDelete())
        event.preventDefault();
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingFee = 534;
    const totalAmount = subtotal + shippingFee;

    const covertPrice = (price) => {
        const Tprice = Number(price) / 100;
        const formattedPrice = Tprice.toLocaleString(undefined, { maximumFractionDigits: 2 });
        return formattedPrice
    }

    return (
        <div className='cart_space'>
            {
                cartItems?.length ? <>
                    <Breadcrumbs pages={'cart'} />
                    <table className='container display_container '>
                        <thead>
                            <tr className='heading_style'>
                                <th style={{ marginLeft: "25%", display: "grid" }}>Item</th>
                                <th style={{ paddingRight: "70px" }}>Price</th>
                                <th style={{ paddingRight: "70px" }}>Quantity</th>
                                <th style={{ paddingRight: "70px" }}>Subtotal</th>
                            </tr>
                        </thead>
                        <tr className='line_style'>
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
                                            <button className="sign2" onClick={() => handleQuantityChange(index, item.quantity - 1, 'dec')} disabled={item.quantity === 1}>-</button>
                                            <span className='number2'>{item.quantity}</span>
                                            <button className="sign2" onClick={() => handleQuantityChange(index, item.quantity + 1, 'inc')}>+</button>
                                        </div>
                                    </td>

                                    <td className='sub_c'>${covertPrice(item.price * item.quantity)}</td>
                                    <td>
                                        <button className='bg_Color' onClick={() => handleDeleteItem(index, item.quantity)}>
                                            <MdDelete className="DeleteStyle" style={{ color: "white", marginLeft: "15%" }} />
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
                        <Link className="Continue_style" to="/products">Continue Shopping</Link>
                        <button className="clear_Button" onClick={handleClearCart}>clear shopping cart</button>
                    </div>
                    <section className='container Cart_Shipping'>
                        <div >
                            <article className='border_CC'>
                                <h5 className='CC sub_C1'> Subtotal: <span className='sub_C1'>${covertPrice(subtotal)}</span></h5>
                                <p className='CC ship_C1'>Shipping Fee: <span className='ship_C1'>${covertPrice(shippingFee)}</span></p>
                                <hr />
                                <h4 className='CC order_C1' style={{ marginTop: "10%" }}> Order Total:<span className='order_C1'>${covertPrice(totalAmount)}</span></h4>
                            </article>
                            <br />
                            <a className="login" href="#">LOGIN</a>
                        </div>
                    </section>

                </> :
                    <div className='Cart2'>
                        <div style={{ marginTop: "5%", marginBottom: "24%" }}>
                            <h2 className='fill_S'>Your cart is empty</h2>
                            <Link to="/products" className='btn_S'>FILL IT</Link>
                        </div>
                    </div>
            }
            <Footer />
        </div>
    );
}






















































