import React from 'react'
import './SliderBox.css'

const SliderBox = ({img ,client_name , profes , long_text , isActive}) => {
    return (
        <div className={`slider-box ${isActive ? 'change_bg' : ''}`}>
            <div className='details_1'>
                <img src={img} alt="" />
                <div>
                    <h4>{client_name}</h4>
                    <p>{profes}</p>
                </div>
            </div>

            <div className='details_2'>
                <p className='long-text'>{long_text}</p>
            </div>
        </div>
    )
}

export default SliderBox