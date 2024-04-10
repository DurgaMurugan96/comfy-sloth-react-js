import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './singleProduct.css';
import BackButton from "../../BackButton";
import Footer from "../../Footer";
import { FaCheck } from 'react-icons/fa';
import StarsRatings from "../../../components/stars/stars";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import { useDispatch } from "react-redux";
import { setCartIncrement } from "../../../store/slice/counterSlice";


const SingleProduct = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const [singleProduct, setSingleProduct] = useState({});
    const [displayedImage, setDisplayedImage] = useState('');
    const [pageLoading, setPageLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const navigate = useNavigate();

    const getSingleProduct = async (id) => {
        setPageLoading(true);
        try {
            const response = await fetch(`https://course-api.com/react-store-single-product?id=${id}`);
            const json = await response.json();
            if (json) {
                setSingleProduct(json || {});
                setDisplayedImage(json?.images?.[0]?.url || '');
            }
        } catch (error) {
            console.log(error.message);
        }
        setPageLoading(false);
    };

    useEffect(() => {
        getSingleProduct(params.id);
    }, [params.id]);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const covertPrice = (price) => {
        const Tprice = Number(price) / 100;
        const formattedPrice = Tprice.toLocaleString(undefined, { maximumFractionDigits: 2 });
        return formattedPrice;
    };

    const addToCart = () => {
        const cartItem = { ...singleProduct, quantity, selectedColor: singleProduct.colors[selectedColorIndex] };
        dispatch(setCartIncrement({ value: quantity }))
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productId = singleProduct?.id

        const isInclude = cart?.findIndex(curr => curr.id === productId)

        if (isInclude !== -1) {
            if (cart[isInclude].selectedColor === singleProduct.colors[selectedColorIndex]) {
                cart[isInclude] = { ...cart[isInclude], quantity: cart[isInclude].quantity + 1 }
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                const totalItems = [...cart, cartItem]
                localStorage.setItem('cart', JSON.stringify(totalItems));
            }
        } else {
            const totalItems = [...cart, cartItem]
            localStorage.setItem('cart', JSON.stringify(totalItems));
        }
        navigate('/cart');
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
    };

    if (pageLoading) {
        return <div className="loading"></div>;
    }

    return (
        <div className="SinglePage ">
            <Breadcrumbs
                pages={"products"}
                subpage={singleProduct.name} />
            <div>
                <div className="section section-center_singlePage page_singlePage container container_section">
                    <div className="backbutton_style">
                        <BackButton />
                    </div>
                    <div className="product-center">
                        <section className="SinglePage_image">
                            <img
                                src={displayedImage}
                                alt=""
                                className=""
                                style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "4px", marginBottom: "20px" }}
                            />
                            <div className="d-flex gap-3 Box_pictures">
                                {singleProduct?.images?.map((image, index) => (
                                    <img
                                        src={image.url}
                                        alt=""
                                        className="flex-grow-1 rounded-1 flex_pictures"
                                        key={index}
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            objectFit: "cover",
                                            border: displayedImage === image.url ? "3px solid #ab7a5f" : ""
                                        }}
                                        onClick={() => setDisplayedImage(image.url)}
                                    />
                                ))}
                            </div>
                        </section>
                        <section className="content">
                            <h2 className="product_name">{singleProduct.name}</h2>
                            <div className="product-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <StarsRatings stars={singleProduct.stars} />
                                <p className="reviews">({singleProduct.reviews} customer reviews)</p>
                            </div>
                            <p className="price_S">$<span className="ms-2">{covertPrice(singleProduct.price)}</span></p>
                            <p className="description_S">{singleProduct.description}</p>
                            <p className='info'>
                                <span>Available : </span>
                                {singleProduct.stock > 0 ? 'In stock' : 'Out of stock'}
                            </p><p className='info'>
                                <span>SKU :</span>
                                {singleProduct.id}
                            </p>
                            <p className='info'>
                                <span>Company: </span>
                                {singleProduct.company}
                            </p>
                            <hr />

                            {singleProduct.stock > 0 && (
                                <p className="d-flex align-items-center gap-1" style={{ height: "50px" }}>
                                    <span className="flex-2 style_C">colors:</span>
                                    {singleProduct?.colors?.map((curr, idx) => (
                                        <button
                                            className="mx-1 color_S"
                                            key={idx}
                                            style={{
                                                background: curr,
                                                width: "24px",
                                                opacity: "0.6",
                                                height: "24px",
                                                padding: "6px",
                                                borderRadius: "100%",
                                                position: "relative"
                                            }}
                                            onClick={() => handleColorClick(idx)}
                                        >
                                            {selectedColorIndex === idx && <FaCheck className="Fa_style" style={{ position: "absolute", top: "-8px", left: "-8px" }} />}
                                        </button>
                                    ))}
                                </p>
                            )}

                            {singleProduct.stock > 0 && (
                                <div className="Symbol" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                    <button className="sign" onClick={decrementQuantity} style={{ fontSize: '24px' }}>-</button>
                                    <p className="number">{quantity} </p>
                                    <button className="sign" onClick={incrementQuantity} style={{ fontSize: '24px' }}>+</button>
                                </div>
                            )}

                            {singleProduct.stock > 0 && (
                                <div className="Button_adjustment">
                                    <button onClick={addToCart} className='button-link_C'>ADD TO CART</button>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default SingleProduct;













































