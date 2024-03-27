import { useState } from 'react';
function Sort({ setFilterProducts, data }) {
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
        setFilterProducts(sortedProducts);
    };

    return (
        <div>
            <form>
                <label htmlFor='sort'>Sort By:</label>
                <select
                    name='sort'
                    id='sort'
                    value={sort}
                    onChange={updateSort}
                    className='sort-input' style={{
                        backgroundColor:
                            "rgb(239, 239, 239)", border: "none"
                    }}
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



