import React from 'react'
import './TitleSection.css'

const TitleSection = ({title}) => {
    return (
        <div className='title-section'>
            <h1>{title}</h1>
        </div>
    )
}

export default TitleSection