import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const StarsRatings = ({stars}) => {
  
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index}>
                {stars > number ? (
                    <BsStarFill />
                ) : stars > index ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        )
    })
    return (
        <div>
            <div className='' style={{color:"rgb(255, 185, 0)"}}>{tempStars}</div>
        </div>
    )
}

export default StarsRatings
