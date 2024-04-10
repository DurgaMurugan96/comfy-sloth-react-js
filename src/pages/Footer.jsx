import moment from 'moment'
import './Footer.css'
export default function Footer() {
    return (
        <div className="Footer_style1">
            <h5>© {moment().format('YYYY')}<span> ComfySloth </span></h5>
            <h5> All rights reserved</h5>
        </div>
    )
}

















