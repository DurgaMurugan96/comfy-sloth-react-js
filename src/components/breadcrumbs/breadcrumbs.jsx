import { Link } from 'react-router-dom'
import './breadcrumbs.scss'
export default function Breadcrumbs(props) {
    const { pages, subpage } = props
    return (
        <div className='breadcrumb_container ' >
            <h3 className='container p-0 link_head_content'>
                <Link to={'/'} className='link'><span >Home</span></Link>
                {subpage ?
                    <span >
                        <Link to={`/${pages}`} className='link'> / {pages}</Link>
                        <span className='active_link'>/ {subpage}</span>
                    </span> :
                    <span className='active_link'>/ {pages}</span>}
            </h3>
        </div>
    )
}




