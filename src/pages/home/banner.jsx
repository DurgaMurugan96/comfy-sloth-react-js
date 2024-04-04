
import { Link } from 'react-router-dom'
import './banner.scss'
export default function Banner() {
    return (

        <div className=" container  banner_container">

            <div className='column1'>
                <h1>Design Your <br />
                    Comfort Zone</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit!  Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                <Link to='/products' className='button-btn'>
                    SHOP NOW
                </Link>
            </div>
            <div className='column2'>
                <div className="box"></div>
                <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" className='img_1' alt="alternative_text" />
                <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" className='img_2' alt="alternative_text" />

            </div>

        </div>

    )
}
