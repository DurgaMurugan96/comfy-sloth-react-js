import './Products.css'
import './ListView.css';
import { Link } from 'react-router-dom'

function ListView({ data = [] }) {

    const covertPrice = (price) => {
        const Tprice = Number(price) / 100;
        const formattedPrice = Tprice.toLocaleString(undefined, { maximumFractionDigits: 2 });
        return formattedPrice
    }
    return (
        <div>
            <div className="list_view_container container">
                <div className="mt-3">
                    <div className="trigger-button">
                    </div>
                    <body>
                        <div className="row">
                            {
                                data.map((user, Products) => <div key={Products} >
                                    <table className='table-vertical  mb-3'>
                                        <tr className='d-flex gap-4'>
                                            <td className="table1">
                                                <p><img src={user.image} alt={user.name} className="img2" /></p>
                                            </td>
                                            <td className="table2 ">
                                                <p className="name1">{user.name}</p>
                                                <p className="price1"><span className="Doller_space">$</span>{covertPrice(user.price)}</p>
                                                <p className="description">{user.description}</p>
                                                <Link to={`/products/${user.id}`} className="detail_btn" style={{ textDecoration: "none" }}>Details</Link>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                )
                            }
                        </div>
                    </body>
                </div>
            </div>
        </div>
    )
}

export default ListView
