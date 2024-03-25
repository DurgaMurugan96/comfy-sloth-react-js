// import './Category.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// export default function Category() {
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [categoryData, setCategoryData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://course-api.com/react-store-products');
//             if (response?.data) {
//                 setCategoryData(response.data);
//                 setFilteredData(response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching category data:', error);
//         }
//     };

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//         if (category === 'office') {
//             const filtered = categoryData.filter(product => product.category === 'office');
//             setFilteredData(filtered);
//         } else if (category === 'living room') {
//             const filtered_lroom = categoryData.filter(product => product.category === 'living room')
//             setFilteredData(filtered_lroom)
//         } else if (category === 'kitchen') {
//             const filtered_kitchen = categoryData.filter(product => product.category === 'kitchen')
//             setFilteredData(filtered_kitchen)
//         } else if (category === 'bedroom') {
//             const filtered_broom = categoryData.filter(product => product.category === 'bedroom')
//             setFilteredData(filtered_broom)
//         } else if (category === 'dining') {
//             const filtered_dining = categoryData.filter(product => product.category === 'dining')
//             setFilteredData(filtered_dining)
//         } else if (category === 'kids') {
//             const filtered_kids = categoryData.filter(product => product.category === 'kids')
//             setFilteredData(filtered_kids)
//         }
//         else {
//             setFilteredData(categoryData);
//         }
//     };


//     return (
//         <div className="category_style">
//             <h5>Category</h5>
//             <button type="button" onClick={() => handleCategoryClick('')}>All</button><br />
//             <button type="button" onClick={() => handleCategoryClick('office')}>Office</button><br />
//             <button type="button" onClick={() => handleCategoryClick('living room')}>Living Room</button><br />
//             <button type="button" onClick={() => handleCategoryClick('kitchen')}>Kitchen</button><br />
//             <button type="button" onClick={() => handleCategoryClick('bedroom')}>Bedroom</button><br />
//             <button type="button" onClick={() => handleCategoryClick('dining')}>Dining</button><br />
//             <button type="button" onClick={() => handleCategoryClick('kids')}>Kids</button><br />
//             <div>
//                 {filteredData.map((product, index) => (
//                     <div key={index}>
//                         <p>Name: {product.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



























































































































