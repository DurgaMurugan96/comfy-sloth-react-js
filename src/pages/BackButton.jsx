import { Link } from 'react-router-dom'
import './BackButton.css'
export default function BackButton() {
    return (
        <div>
            <Link to="/products" className="button_style">BACK TO PRODUCTS</Link>
        </div>
    )
}



