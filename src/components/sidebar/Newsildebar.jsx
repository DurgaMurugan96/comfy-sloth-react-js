import { useEffect, useState } from "react";
import './Newsildebar.scss'
import Color from "./Color/Color";
export const FilterSection = ({ filterProducts, setFilterProducts = () => { } }) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 309999,
        freeShipping: false,
    });

    useEffect(() => {
        fetch("https://course-api.com/react-store-products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilterProducts(data);

            })
            .catch((error) => console.error("Error fetching products:", error));
    }, [setFilterProducts]);

    const clearAllFilters = () => {
        setFilters({
            text: "",
            category: "all",
            company: "all",
            color: "all",
            price: 309999,
            freeShipping: false,
        });
    };

    const updateFilterValue = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFilters({ ...filters, [name]: newValue });
    };


    useEffect(() => {
        let tempFilterProducts = [...products];

        const { text, category, company, color, price, freeShipping } = filters;

        if (text) {
            tempFilterProducts = tempFilterProducts.filter((product) =>
                product.name.toLowerCase().includes(text.toLowerCase())
            );
        }

        if (category !== "all") {
            tempFilterProducts = tempFilterProducts.filter(
                (product) => product.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (company !== "all") {
            tempFilterProducts = tempFilterProducts.filter(
                (product) => product.company.toLowerCase() === company.toLowerCase()
            );
        }

        if (color !== "all") {
            tempFilterProducts = tempFilterProducts.filter((product) =>
                product.colors.includes(color)
            );
        }

        if (price !== 309999) {
            tempFilterProducts = tempFilterProducts.filter(
                (product) => product.price <= price
            );
        }


        if (freeShipping) {
            tempFilterProducts = tempFilterProducts.filter(
                (product) => product.shipping === true
            );
        }

        setFilterProducts(tempFilterProducts);
    }, [filters, products, setFilterProducts]);

    const handleColorChange = (color) => {
        updateFilterValue({ target: { name: 'color', value: color } });
    }


    return (
        <div className='fixed_style'>
            <div className="filter-search common_space">
                <input
                    type="text"
                    name="text"
                    placeholder="Search"
                    className="input_style"
                    value={filters.text}
                    onChange={updateFilterValue}
                />
            </div>
            <div className="filter-category common_space">
                <h5>Category</h5>
                <div className="category-buttons">
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'all' } })}
                        className={filters.category === 'all' ? 'active' : ''}
                    >
                        All
                    </button><br />
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'office' } })}
                        className={filters.category === 'office' ? 'active' : ''}
                    >
                        Office
                    </button><br />
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'living room' } })}
                        className={filters.category === 'living room' ? 'active' : ''}
                    >
                        Living Room
                    </button><br />
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'kitchen' } })}
                        className={filters.category === 'kitchen' ? 'active' : ''}
                    >
                        Kitchen
                    </button><br />
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'bedroom' } })}
                        className={filters.category === 'bedroom' ? 'active' : ''}
                    >
                        Bedroom
                    </button><br />
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'dining' } })}
                        className={filters.category === 'dining' ? 'active' : ''}
                    >
                        Dining
                    </button><br />
                    <button
                        type="button"
                        onClick={() => updateFilterValue({ target: { name: 'category', value: 'kids' } })}
                        className={filters.category === 'kids' ? 'active' : ''}
                    >
                        Kids
                    </button><br />
                </div>
            </div>

            <div className="filter-company common_space">
                <h5>Company</h5>
                <select
                    name="company"
                    value={filters.company}
                    onChange={updateFilterValue}
                    className="company-filter"
                >
                    <option value="all">all</option>
                    <option value="marcos">marcos</option>
                    <option value="liddy">liddy</option>
                    <option value="ikea">ikea</option>
                    <option value="caressa">caressa</option>
                </select>
            </div>

            <Color data={products} handleColorChange={handleColorChange} activeColor={filters.color} />

            <div className="common_space">
                <label>
                    <h5>Price</h5 >
                    <span style={{ color: "#48647f" }}>${filters.price}</span><br />
                    <input
                        type="range"
                        name="price"
                        value={filters.price}
                        min="0"
                        max="309999"
                        onChange={updateFilterValue}
                    />
                </label>
            </div>

            <div className="free_shipping common_space">
                <label>
                    <span style={{ fontSize: "16px" }}>Free Shipping </span>
                    <input
                        type="checkbox"
                        name="freeShipping"
                        className="checkbox_style"
                        checked={filters.freeShipping}
                        onChange={updateFilterValue}
                    />

                </label>
            </div>

            <div>
                <button className="btn-clear common_space" onClick={clearAllFilters}>Clear Filters</button>
            </div>
        </div>
    );
};