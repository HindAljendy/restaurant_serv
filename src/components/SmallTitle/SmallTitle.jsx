import React from 'react'
import './SmallTitle.css'

const SmallTitle = ({small_title}) => {
    return (
        <div className='small-title'>
            <p>{small_title}</p>
        </div>
    )
}

export default SmallTitle