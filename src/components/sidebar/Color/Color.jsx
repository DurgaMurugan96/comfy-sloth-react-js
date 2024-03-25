import { FaCheck } from 'react-icons/fa';
import './Color.css'
import { useState } from 'react';
export default function Color({ handleColorChange = () => { }, data = [] }) {

    const [selectedColor, setSelectedColor] = useState('all')
    let colorArray = []
    data?.forEach(item => {
        item.colors.forEach(color => {
            if (!colorArray.includes(color))
                colorArray.push(color);
        });
    });

    const handleColor = (color) => {
        setSelectedColor(color);
        handleColorChange(color)
    }
    return (
        <div>
            <h5 className='title16'>Colors</h5>
            <div className="d-flex align-items-center color_c gap-1">
                <button className='btn1' onClick={() => handleColor('all')} >
                    All</button>
                {
                    !!colorArray?.length && colorArray?.map((curr, idx) =>
                        <button
                            className={` btn-color d-flex align-items-center ${selectedColor === curr ? 'active_btn' : 'non_active_btn'}`}
                            style={{ backgroundColor: curr, borderRadius: "100%" }}
                            key={idx}
                            onClick={() => handleColor(curr)} >
                            <FaCheck className='icon' />
                        </button>
                    )
                }
            </div>
            {/*  */}
        </div >
    )
}































































