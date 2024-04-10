import { Link } from 'react-router-dom'
import './banner.scss'
import HeroImg1 from '../../assets/Home1.jpeg';
import HeroImg2 from '../../assets/Home2.jpeg';


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
                <img src={HeroImg1} className='img_1' />
                <img src={HeroImg2} className='img_2' />
            </div>

        </div>

    )
}
