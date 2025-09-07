import React from 'react'
import './Blog.css'
import ImgBlog1 from './../../../assets/blog-1.jpg'
import ImgBlog2 from './../../../assets/blog-2.jpg'
import ImgBlog3 from './../../../assets/blog-3.jpg'
import BlogCard from '../../BlogCard/BlogCard'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import { motion } from 'framer-motion'

const Blog = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 300,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
                delay: 0.5
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 800,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    const commonTransition = {
        duration: 2,
        type: 'spring',
        stiffness: 30,
        damping: 8,
        mass: 1,
    };
    return (
        <div className='section-container'>
            <div className="section blog page">
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ...commonTransition,
                    }}
                    viewport={{ once: true }}
                    className='heading-section'>
                    <SmallTitle small_title=" Our Blog" />
                    <TitleSection title="Be First Who Read News" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        ...commonTransition,
                    }}
                    viewport={{ once: true }}

                    className="content">
                    <BlogCard image={ImgBlog1}  variants={itemVariants} />
                    <BlogCard image={ImgBlog2}  variants={itemVariants}/>
                    <BlogCard image={ImgBlog3}  variants={itemVariants}/>
                </motion.div>

            </div>
        </div>
    )
}

export default Blog