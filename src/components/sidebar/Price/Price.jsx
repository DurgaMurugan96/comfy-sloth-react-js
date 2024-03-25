// import { useState, useEffect } from "react";
// import "./Price.css";

// export default function Price() {
//     const [price, setPrice] = useState(0);
//     const [filterProducts, setFilterProducts] = useState([]);
//     const [allProducts, setAllProducts] = useState([]);
//     const [filters, setFilters] = useState({
//         maxPrice: 0,
//         price: 0
//     });

//     const handlePrice = (event) => {
//         setPrice(parseFloat(event.target.value));
//     };

//     useEffect(() => {
//         fetch("https://course-api.com/react-store-products")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch data");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setAllProducts(data);

//                 let priceArr = data.map((curElem) => curElem.price);
//                 let maxPrice = Math.max(...priceArr);

//                 setFilters({
//                     maxPrice: maxPrice,
//                     price: maxPrice
//                 });

//                 setFilterProducts([...data]);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     useEffect(() => {
//         let tempFilterProducts = [...allProducts];
//         if (price !== 0) {
//             tempFilterProducts = tempFilterProducts.filter(
//                 (curElem) => curElem.price <= price
//             );
//         }
//         setFilterProducts(tempFilterProducts);
//     }, [price, allProducts]);


//     console.log(price, 'price');
//     console.log({
//         filterProducts,
//         allProducts,
//         filters
//     });

//     return (
//         <div className="price_style">
//             <label>
//                 <span className="me-3 style1">Price</span><br />
//                 <span>${price}</span>
//                 <input
//                     type="range"
//                     value={price}
//                     min="0"
//                     max="309999"
//                     onChange={handlePrice}
//                 />
//             </label>
//             <div className="product-list">
//                 {filterProducts.length > 0 ? (
//                     filterProducts.map((product, index) => (
//                         <div key={index} className="product">
//                             <h3>{product.name}</h3>
//                             <p>Price: ${product.price}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found</p>
//                 )}
//             </div>
//         </div>
//     );
// }


















































