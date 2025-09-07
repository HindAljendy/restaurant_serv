import React from 'react'
import './MenuItem.css'
import { motion } from 'framer-motion'

const MenuItem = ({menuImage , name , price , description , variants}) => {
    return (
        <motion.div
            variants={variants}
            
            className='menu-item'>
            <img src={menuImage} alt="menuImage"  />
            <div className='item-details'>
                <div className='main-details'>
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                </div>
                <p>{description}</p>
            </div>

        </motion.div>
    )
}

export default MenuItem