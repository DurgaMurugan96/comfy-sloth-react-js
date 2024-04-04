import './form.scss';
export default function Form() {
    return (
        <section className="Home_page">
            <div className="section_center">
                <h3>Join our newsletter and get 20% off</h3>
                <div className="content_HomePage">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                    <form className="contact_form">
                        <input type="email" className="form-input" placeholder="Enter Email" />
                        <button type="submit" className="submit-btn">subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
