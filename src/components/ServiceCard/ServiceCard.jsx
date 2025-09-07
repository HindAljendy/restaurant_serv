import React from 'react'
import './ServiceCard.css'
import Button from '../Button/Button'
import { motion } from 'framer-motion'

const ServiceCard = ({photo , title , variants}) => {
    return (
        <motion.div 
            variants={variants}

            className='service-card'>
            <div className='icon'>
                {photo}
            </div>
            <h4>{title}</h4>
            <p>Contrary to popular belief, ipsum is not simply random.</p>
            <Button title="Read More"/>
        </motion.div>
    )
}

export default ServiceCard