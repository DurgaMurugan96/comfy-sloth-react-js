import './searchbar.css';
const Searchbar = ({ handleSearchInputChange = () => { }, search = '' }) => {
    return (
        <div>
            <input className='search-input'
                type="text"
                placeholder="search"
                value={search}
                //  onChange={handleSearchInputChange}
                onChange={(e) => handleSearchInputChange("search", e.target.value)}
            />
        </div>
    );
}
export default Searchbar;





