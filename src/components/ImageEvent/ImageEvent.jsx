import React, { useState } from 'react'
import { FaSearchPlus, FaTimes } from 'react-icons/fa'
import './ImageEvent.css'
import { motion } from 'framer-motion'


const ImageEvent = ({ title, imgEvent  , variants}) => {

    const [showScaleImage, setShowScaleImage] = useState(false) //boolean

    return (
        <>
            <motion.div
                variants={variants}
                
                className='image-event'>
                <div className='image-container'>
                    <div className="overlay-describe">
                        <h4>{title}</h4>
                        <FaSearchPlus className='icon' onClick={() => setShowScaleImage(true)} />
                    </div>
                    <img src={imgEvent} alt="imgEvent" />
                </div>
            </motion.div>


            {/* when click on icon scale */}

            {
                showScaleImage && (
                    <div className="show-image">
                        <div className='image-scale'>
                            <FaTimes className='icon' onClick={() => setShowScaleImage(false)} />
                            <img src={imgEvent} alt="imgEvent" />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ImageEvent