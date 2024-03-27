// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ListView from './ListView';
// import './Products.css';
// import Searchbar from '../components/sidebar/searchbar/searchbar';
// import Company from '../components/sidebar/Company/Company';
// import Color from '../components/sidebar/Color/Color';
// import FreeShip from '../components/sidebar/FreeShip/FreeShip';
// import ClearFilter from '../components/sidebar/ClearFilter/ClearFilter';
// import Footer from './Footer';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import { IoGrid } from "react-icons/io5";
// import { HiMenu } from "react-icons/hi";
// import Sort from './Sort';
// import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';


// function Price({ onPriceChange }) {
//     const [price, setPrice] = useState(309999);
//     const handlePriceChange = (event) => {
//         const selectedPrice = parseFloat(event.target.value);
//         setPrice(selectedPrice);
//         onPriceChange(selectedPrice);
//     };

//     return (
//         <div className="price_style">
//             <label>
//                 <span className="me-3 Price_s ">Price</span><br />
//                 <span>${price}</span><br />
//                 <input
//                     type="range"
//                     value={price}
//                     min="0"
//                     max="309999"
//                     onChange={handlePriceChange}
//                 />
//             </label>
//         </div>
//     );
// }


// function Products() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate()
//     const [filteredData, setFilteredData] = useState([]);
//     // const [productList, setProductList] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [listView, setListView] = useState('grid');
//     const [search, setSearch] = useState('');
//     // const [selectedCompany, setSelectedCompany] = useState('');
//     // const [selectedPrice, setSelectedPrice] = useState(0);


//     useEffect(() => {
//         fetchData();
//     }, []);


//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://course-api.com/react-store-products');
//             if (response?.data) {
//                 setData(response?.data);
//                 setFilteredData(response?.data);
//                 // setProductList(response?.data)
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Category
//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//         if (category === '') {
//             setFilteredData(data);
//         } else {
//             const filtered = data.filter((product) => product.category.toLowerCase() === category.toLowerCase());
//             setFilteredData(filtered);
//         }
//     };

//     // Company
//     const handleSelectCompany = (company) => {
//         // setSelectedCompany(company);
//         if (company === '') {
//             setFilteredData(data);
//         } else {
//             const filtered = data.filter((product) => product.company.toLowerCase() === company.toLowerCase());
//             setFilteredData(filtered);
//         }
//     };

//     // Search
//     const handleSearchInputChange = (event) => {
//         const searchInput = event.target.value
//         setSearch(searchInput);
//         const filteredProducts = data.filter((product) =>
//             product.name.toLowerCase().includes(searchInput.toLowerCase())
//         );
//         setFilteredData(filteredProducts);
//     };

//     //Color
//     const handleColorChange = (color) => {
//         if (color !== 'all') {
//             const filteredProducts = data.filter((product) =>
//                 product?.colors.includes(color)
//             );
//             setFilteredData(filteredProducts)
//         }
//         else {
//             setFilteredData(data)
//         }
//     }

//     //Price
//     const handlePriceChange = (price) => {
//         // setSelectedPrice(price);
//         filterProductsByPrice(price);
//     };

//     const filterProductsByPrice = (price) => {
//         let tempFilterProducts = [...data];
//         if (price !== 0) {
//             tempFilterProducts = tempFilterProducts.filter(
//                 (curElem) => curElem.price <= price
//             );
//         }
//         setFilteredData(tempFilterProducts);
//     };

//     // Freeship
//     const handleFreeShip = (e) => {
//         const isChecked = e.target.checked;
//         if (isChecked) {
//             const filter = filteredData.filter(curr => curr.shipping === isChecked);
//             setFilteredData(filter || [])
//         } else {
//             setFilteredData(data || [])
//         }
//     };


//     // clearFilter
//     const handleClear = () => {
//         setFilteredData(data)
//     }

//     // useEffect(() => {
//     //     if (filteredData?.length) {
//     //         setProductList(filteredData)
//     //     }
//     // }, [data, filteredData])


//     return (
//         <div>
//             <div>
//                 <Breadcrumbs pages={"Products"} />
//                 {/* <button className="b-list" onClick={() => { setListView(prev => prev === 'list' ? 'grid' : 'list') }}>list</button> */}
//                 <div className="column_Home">
//                     <div className="fixed-column">
//                         <div className="control-form ">
//                             <Searchbar className="input_search_style"
//                                 handleSearchInputChange={handleSearchInputChange}
//                                 search={search} />
//                             <div className="category_style">
//                                 <h5>Category</h5>
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('')}
//                                     className={selectedCategory === '' ? 'active' : ''}
//                                 >
//                                     All
//                                 </button><br />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('office')}
//                                     className={selectedCategory === 'office' ? 'active' : ''}
//                                 >
//                                     Office
//                                 </button><br />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('living room')}
//                                     className={selectedCategory === 'living room' ? 'active' : ''}
//                                 >
//                                     Living Room
//                                 </button><br />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('kitchen')}
//                                     className={selectedCategory === 'kitchen' ? 'active' : ''}
//                                 >
//                                     Kitchen
//                                 </button><br />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('bedroom')}
//                                     className={selectedCategory === 'bedroom' ? 'active' : ''}
//                                 >
//                                     Bedroom
//                                 </button><br />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('dining')}
//                                     className={selectedCategory === 'dining' ? 'active' : ''}
//                                 >
//                                     Dining
//                                 </button><br />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleCategoryClick('kids')}
//                                     className={selectedCategory === 'kids' ? 'active' : ''}
//                                 >
//                                     Kids
//                                 </button><br />
//                             </div>
//                             <Company onSelectCompany={handleSelectCompany} />
//                             <Color data={data} handleColorChange={handleColorChange} />
//                             <Price onPriceChange={handlePriceChange} />
//                             <FreeShip filteredData={filteredData} handleFreeShip={handleFreeShip} />
//                             <ClearFilter handleClear={handleClear} />
//                         </div>
//                     </div>
//                     <div className="scrolling-column " style={{ maxWidth: "946px" }}>
//                         <div className='product_sort d-flex align-items-center justify-content-between'>
//                             <div className="view_change_btn m-0 align-items-center d-flex gap-1">
//                                 <span className='btn_container border rounded  p-1 d-flex align-items-center' style={{ background: listView === "grid" && "black", color: listView === "grid" ? 'white' : "black" }} onClick={() => setListView("grid")}>
//                                     <IoGrid style={{ fontSize: "16px" }} />
//                                 </span>
//                                 <span className='btn_container border rounded p-1 d-flex align-items-center' style={{ background: listView === "list" && "black", color: listView === "list" ? 'white' : "black" }} onClick={() => setListView("list")}>
//                                     <HiMenu style={{ fontSize: "16px" }} />
//                                 </span>
//                             </div>
//                             <p className="m-0">{filteredData.length} Products Found</p>
//                             <hr className="m-0 mx-2 w-50 " />
//                             <div className="d-flex align-items-center">
//                                 <Sort setFilteredData={setFilteredData} data={data} />
//                             </div>
//                         </div>

//                         {listView === 'list' ?
//                             <ListView data={filteredData} /> :
//                             <div className="mt-3" style={{ maxWidth: "946px" }}>
//                                 <div className="row product_row">
//                                     {
//                                         !!filteredData.length && filteredData?.map((product, index) => (
//                                             <div key={index} className="col-4 ">

//                                                 <div className='image_container' onClick={() => navigate(`/products/${product.id}`)} style={{ cursor: "pointer" }}>
//                                                     <div className="absolute_bg " style={{
//                                                         maxHeight: "175px", background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))", transition: "opacity 400ms"
//                                                     }}>
//                                                         <span className="icon_container" style={{ maxHeight: "40px", maxWidth: "40px" }}>
//                                                             <FaSearch className="icon" />
//                                                         </span>
//                                                     </div>
//                                                     <img src={product.image} alt={product.name} className="img1" style={{ borderRadius: "4px" }} />
//                                                 </div>
//                                                 <p className="name">{product.name}</p>
//                                                 <p className="price"><span className="Doller_space">$</span>{product.price}</p>
//                                             </div>
//                                         ))
//                                     }
//                                     {
//                                         filteredData.length === 0 && <>Sorry, no products found
//                                         </>
//                                     }
//                                 </div>

//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
// export default Products;
