import React from 'react'
import './ContactInfo.css'

const ContactInfo = ({icon ,title, text1 , text2}) => {
    return (
        <div className='contact-info'>
            <div className='icon'>
                {icon}
            </div>
            <div>
                <h4>{title}</h4>
                <p className='paragraph'>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    )
}

export default ContactInfo