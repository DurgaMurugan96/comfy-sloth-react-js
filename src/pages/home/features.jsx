import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import './features.scss';

export default function Features() {
    const featuredItem = [
        {
            id: "recNZ0koOqEmilmoz",
            img: "https://www.course-api.com/images/store/product-7.jpeg",
            name: "Entertainment Center",
            price: 599.99
        },
        {
            id: "recrfxv3EwpvJwvjq",
            img: "https://www.course-api.com/images/store/product-8.jpeg",
            name: "High-Back Bench",
            price: 399.99
        },
        {
            id: "recoAJYUCuEKxcPSr",
            img: "https://www.course-api.com/images/store/product-11.jpeg",
            name: "Modern Bookshelf",
            price: 319.99
        },
    ]
    return (
        <div className="Features">
            <h2>Featured Products</h2>
            <div className="underline_Home "></div>
            <div className="Feature_images">
                {
                    featuredItem?.map((curr, idx) =>
                        <div key={idx}>
                            <div className="image_container">
                                <Link to={`/products/${curr.id}`}>
                                    <div className="absolute_bg ">
                                        <span className="icon_container">
                                            <FaSearch className="icon" />
                                        </span>
                                    </div>
                                    <img src={curr.img} alt="" className="images_f" />
                                </Link>
                            </div>

                            <div className="d-flex justify-content-between align-items-center w-full">
                                <h5 className="names" >{curr.name}</h5>
                                <p className="m-0 prices">${curr?.price}</p>
                            </div>
                        </div>)
                }
            </div>
            <Link to='/products' className="feature_button">
                All Products
            </Link>
        </div>
    )
}
