import { useState } from 'react';
import ListView from './ListView';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoGrid } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import Sort from './Sort';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import { FilterSection } from '../components/sidebar/Newsildebar';
import Footer from './Footer';


function Products() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const [filteredData, setFilteredData] = useState([]);
    const [listView, setListView] = useState('grid');
    const [filterProducts, setFilterProducts] = useState([]);

    const covertPrice = (price) => {
        const Tprice = Number(price) / 100;
        const formattedPrice = Tprice.toLocaleString(undefined, { maximumFractionDigits: 2 });
        return formattedPrice
    }

    return (
        <div>
            <div>
                <Breadcrumbs pages={"Products"} />
                <div className="column_Home">
                    <div className="fixed-column">
                        <FilterSection setFilterProducts={setFilterProducts} filterProducts={filterProducts} />
                    </div>
                    <div className="scrolling-column " style={{ maxWidth: "946px" }}>
                        <div className='product_sort d-flex align-items-center justify-content-between' >
                            <div className="view_change_btn m-0 align-items-center d-flex gap-1">
                                <span className='btn_container border rounded  p-1 d-flex align-items-center' style={{ background: listView === "grid" && "black", color: listView === "grid" ? 'white' : "black" }} onClick={() => setListView("grid")}>
                                    <IoGrid style={{ fontSize: "16px" }} />
                                </span>
                                <span className='btn_container border rounded p-1 d-flex align-items-center' style={{ background: listView === "list" && "black", color: listView === "list" ? 'white' : "black" }} onClick={() => setListView("list")}>
                                    <HiMenu style={{ fontSize: "16px" }} />
                                </span>
                            </div>
                            <p className="m-0 product_name_style" style={{ color: "#324d67" }}>{filterProducts.length} Products Found </p>
                            <hr className="m-0 mx-2 w-50 " />
                            <div className="d-flex align-items-center ">
                                <Sort setFilterProducts={setFilterProducts} data={filterProducts} />
                            </div>
                        </div>


                        {/* list View */}
                        {listView === 'list' ?
                            <ListView data={filterProducts} /> :
                            <div className="mt-3" style={{ maxWidth: "946px" }}>
                                <div className="row product_row">
                                    {
                                        !!filterProducts.length && filterProducts?.map((product, index) => (
                                            <div key={index} className="col-4 product_images">

                                                <div className='image_container' onClick={() => navigate(`/products/${product.id}`)} style={{ cursor: "pointer" }}>
                                                    <div className="absolute_bg " style={{
                                                        maxHeight: "175px", background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))", transition: "opacity 400ms"
                                                    }}>
                                                        <span className="icon_container" style={{ maxHeight: "40px", maxWidth: "40px" }}>
                                                            <FaSearch className="icon" />
                                                        </span>
                                                    </div>
                                                    <img src={product.image} alt={product.name} className="img1" style={{ borderRadius: "4px" }} />
                                                </div>
                                                <p className="name">{product.name}</p>
                                                <p className="price"><span className="Doller_space">$</span>{covertPrice(product.price)}</p>
                                            </div>
                                        ))
                                    }
                                    {
                                        filterProducts.length === 0 && <>  <span className='error_message'>Sorry, no products matched your search.</span>
                                        </>
                                    }
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Products;










