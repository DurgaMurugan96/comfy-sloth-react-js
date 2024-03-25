import './FreeShip.css'
export default function FreeShip({ handleFreeShip = () => { } }) {

    return (
        <div className="ss">
            <label className="free_style">Free Shipping</label>
            <input
                type="checkbox"
                onChange={handleFreeShip}
                className="shipping1"
            />
        </div>
    );
}

