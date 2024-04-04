import './Home.scss';
import Furniture from "./home/Furniture";
import Banner from "./home/banner";
import Features from "./home/features";
import Form from "./home/form";
import Footer from "./Footer";


function Home() {
    return (
        <div className="HomePage">
            <Banner />
            <Features />
            <Furniture />
            <Form />
            <Footer />
        </div>
    )
}
export default Home
