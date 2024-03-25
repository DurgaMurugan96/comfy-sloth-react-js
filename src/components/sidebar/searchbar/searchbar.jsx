
import './searchbar.css';


function Searchbar({ handleSearchInputChange = () => { }, search = '' }) {
    return (
        <div>
            <input className='search-input'
                type="text"
                placeholder="search"
                value={search}

                onChange={handleSearchInputChange}
            />
        </div>
    );
}

export default Searchbar;


