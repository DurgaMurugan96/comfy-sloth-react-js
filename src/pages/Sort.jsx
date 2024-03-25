import React, { useState } from 'react';

function Sort({ setFilteredData, data }) {
    const [sort, setSort] = useState('price-lowest');

    const updateSort = (e) => {
        setSort(e.target.value);
        sortProducts(e.target.value);
    };

    const sortProducts = (sortType) => {
        let sortedProducts = [...data];
        switch (sortType) {
            case 'price-lowest':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-highest':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-a':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-z':
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }
        setFilteredData(sortedProducts);
    };

    return (
        <div>
            <form>
                <label htmlFor='sort'>Sort by:</label>
                <select
                    name='sort'
                    id='sort'
                    value={sort}
                    onChange={updateSort}
                    className='sort-input'
                >
                    <option value='price-lowest'>Price (Lowest)</option>
                    <option value='price-highest'>Price (Highest)</option>
                    <option value='name-a'>Name (A - Z)</option>
                    <option value='name-z'>Name (Z - A)</option>
                </select>
            </form>
        </div>
    );
}

export default Sort;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Sort() {
//     const [products, setProducts] = useState([]);
//     const [sort, setSort] = useState('price-lowest');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://course-api.com/react-store-products');
//             if (response?.data) {
//                 setProducts(response.data);
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const updateSort = (e) => {
//         setSort(e.target.value);
//     };

//     const sortedProducts = () => {
//         switch (sort) {
//             case 'price-lowest':
//                 return [...products].sort((a, b) => a.price - b.price);
//             case 'price-highest':
//                 return [...products].sort((a, b) => b.price - a.price);
//             case 'name-a':
//                 return [...products].sort((a, b) => a.name.localeCompare(b.name));
//             case 'name-z':
//                 return [...products].sort((a, b) => b.name.localeCompare(a.name));
//             default:
//                 return products;
//         }
//     };

//     return (
//         <div>
//             <form>
//                 <label htmlFor='sort'>Sort by:</label>
//                 <select
//                     name='sort'
//                     id='sort'
//                     value={sort}
//                     onChange={updateSort}
//                     className='sort-input'
//                 >
//                     <option value='price-lowest'>Price (Lowest)</option>
//                     <option value='price-highest'>Price (Highest)</option>
//                     <option value='name-a'>Name (A - Z)</option>
//                     <option value='name-z'>Name (Z - A)</option>
//                 </select>
//             </form>

//             {sortedProducts().map(product => (
//                 <div key={product.id}>
//                     <h3>{product.name}</h3>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
