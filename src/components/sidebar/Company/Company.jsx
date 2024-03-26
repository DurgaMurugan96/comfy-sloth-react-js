import { useState } from 'react';
import './Company.css';
function Company({ onSelectCompany }) {
    const [selectedCompany, setSelectedCompany] = useState('');

    const handleCompanyChange = (event) => {
        const company = event.target.value;
        setSelectedCompany(company);
        onSelectCompany(company);
    };

    return (
        <div className='company_style1'>
            <h5>Company</h5>
            <form action="#">
                <select
                    name="company"
                    id="company"
                    className="company-filter"
                    value={selectedCompany}
                    onChange={handleCompanyChange}>
                    <option value="">all</option>
                    <option value="marcos">marcos</option>
                    <option value="liddy">liddy</option>
                    <option value="ikea">ikea</option>
                    <option value="caressa">caressa</option>
                </select>
            </form>
        </div>
    );
}

export default Company;












































