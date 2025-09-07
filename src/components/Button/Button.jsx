import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'



const Button = ({title , icon , onClick , className , path }) => {
    return (
        <>
            <Link to={path} className={`button ${className}`} onClick={onClick}>
                {title} 
                {icon}
            </Link>
        </>
    )
}

export default Button