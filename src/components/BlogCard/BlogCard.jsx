import React from 'react'
import './BlogCard.css'
import { motion } from 'framer-motion'

const BlogCard = ({ image  , variants}) => {
    return (
        <motion.div
            variants={variants}
            className='blog-card'>
            <div className="blog-image">
                <img src={image} alt="ImgBlog" />
            </div>

            <div className="blog-content">
                <p className='sep'><span>16</span> Sep</p>
                <p className='question'>How to get more test in your food ?</p>
            </div>

        </motion.div>
    )
}

export default BlogCard