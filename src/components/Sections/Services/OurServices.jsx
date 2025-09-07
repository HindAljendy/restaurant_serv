import React from 'react'
import './Services.css'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import ServiceCard from '../../ServiceCard/ServiceCard'
import { FaCheese, FaHamburger, FaHotdog, FaPizzaSlice, FaUtensils, FaWalking, FaWheelchair, FaWineGlassAlt } from 'react-icons/fa'
import { motion } from 'framer-motion';


const OurServices = () => {

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
            },
        },
    };

    const cardVariants = {
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
            <div className="section services page">
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ...commonTransition,
                    }}
                    viewport={{ once: true }}

                    className='heading-section'>
                    <SmallTitle small_title="Our Services" />
                    <TitleSection title="What We Offer" />
                </motion.div>

                <div className="content">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            ...commonTransition,
                        }}
                        viewport={{ once: true }}

                        className="part space">

                        <ServiceCard photo={<FaCheese />} title="Wedding Services" variants={cardVariants} />
                        <ServiceCard photo={<FaPizzaSlice />} title="Corporate Catering" variants={cardVariants} />


                        <ServiceCard photo={<FaHotdog />} title="Cocktail Reception" variants={cardVariants} />
                        <ServiceCard photo={<FaHamburger />} title="Bento Catering" variants={cardVariants} />


                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            ...commonTransition,
                        }}
                        viewport={{ once: true }}

                        className="part">
                        <ServiceCard photo={<FaWineGlassAlt />} title="Pub Party" variants={cardVariants} />
                        <ServiceCard photo={<FaWalking />} title="Home Delivery" variants={cardVariants} />
                        <ServiceCard photo={<FaWheelchair />} title="Sit-down Catering" variants={cardVariants} />
                        <ServiceCard photo={<FaUtensils />} title="Buffet Catering" variants={cardVariants} />
                    </motion.div>
                </div>
            </div>
        </div>
    )

}
export default OurServices