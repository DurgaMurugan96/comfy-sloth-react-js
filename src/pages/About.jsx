import './About.css'
import Footer from "./Footer";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
function About() {
    return (
        <>
            <Breadcrumbs pages={"about"} />
            <div className='container  about_container'>
                <div className='mb-20 picture'>
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" className="pic" alt="alternative_text" />
                </div>
                <div className='content'>
                    <h2 >Our Story </h2>
                    <div className="underline"></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About
