import React from 'react'
import './AboutUs.css'
import aboutImg from './../../../assets/about.jpg'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import { FaArrowRight, FaCheck, FaShare, FaUsers, FaUsersCog } from 'react-icons/fa'
import Button from '../../Button/Button'
import AboutCard from '../../AboutCard/AboutCard'
import ImgShow from './../../../assets/image_show.jpg'
import { motion } from 'framer-motion';

const AboutUs = ({ setPlayState }) => {

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 300,
        },
        visible: {
            opacity: 1,
            y: 0,
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
        <div className="section-container">
            <div className='section about-us page'>
                <div className="part-one">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        transition={{
                            ...commonTransition,
                        }}
                        viewport={{ once: true }}

                        className="image">
                        <img src={aboutImg} alt="aboutImg" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        transition={{
                            ...commonTransition,
                            delay: 0.5,
                        }}
                        viewport={{ once: true }}

                        className="text">
                        <SmallTitle small_title="About us" />
                        <TitleSection title="Trusted By 200 + satisfied clients" />

                        <p className='paragraph'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit
                            cillum dolore.
                        </p>
                        <div className="list">
                            <ul>
                                <li> <FaShare className='icon' /> Fresh and Fast food Delivery</li>
                                <li> <FaShare className='icon' /> Easy Customization Options</li>
                            </ul>
                            <ul>
                                <li><FaShare className='icon' /> 24/7 Customer Support</li>
                                <li><FaShare className='icon' /> Delicious Deals for Delicious Meals</li>
                            </ul>
                        </div>

                        <Button title="About Us" icon={<FaArrowRight />} path="/about" />
                    </motion.div>
                </div>

                <div className="part-two">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        transition={{
                            duration: 2,
                            type: 'spring',
                            stiffness: 30,
                            damping: 8,
                            mass: 1,
                            delay: 0.3,
                        }}
                        viewport={{ once: true }}

                        className="cards">
                        <AboutCard icon={<FaUsers />} number="689" text="Happy Customers" />
                        <AboutCard icon={<FaUsersCog />} number="107" text="Expert Chefs" />
                        <AboutCard icon={<FaCheck />} number="253" text="Events Complete" />
                    </motion.div>


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        transition={{
                            duration: 2,
                            type: 'spring',
                            stiffness: 30,
                            damping: 8,
                            mass: 1,
                            delay: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="video">
                        <img src={ImgShow} alt="ImgShow" />

                        <div className='pulse-border-animate'></div>
                        <button className='btn-video-icon' onClick={() => setPlayState(true)}>
                            <span></span>
                        </button>
                    </motion.div>
                </div>
            </div>

        </div>

    )
}

export default AboutUs