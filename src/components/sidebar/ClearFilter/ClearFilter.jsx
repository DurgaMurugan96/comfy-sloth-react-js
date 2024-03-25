import './ClearFilter.css'
export default function ClearFilter({ handleClear = () => { } }) {
    return (
        <div className="clearFilters">
            <button className='btn-c' onClick={handleClear}>clear Filters</button>
        </div>
    )
}
