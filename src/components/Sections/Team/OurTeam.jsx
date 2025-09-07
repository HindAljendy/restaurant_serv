import React from 'react'
import './Team.css'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import TeamCard from '../../TeamCard/TeamCard'
import imgTeam1 from './../../../assets/team-1.jpg'
import imgTeam2 from './../../../assets/team-2.jpg'
import imgTeam3 from './../../../assets/team-3.jpg'
import imgTeam4 from './../../../assets/team-4.jpg'
import { motion } from 'framer-motion';


const OurTeam = () => {
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
                duration: 2,
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
        <div className="section-container">
            <div className='section our-team page'>
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ...commonTransition,
                    }}
                    viewport={{ once: true }}

                    className='heading-section'>
                    <SmallTitle small_title=" Our Team" />
                    <TitleSection title="We have experienced chef Team" />
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
                    <TeamCard ImgTeam={imgTeam1} name="Henry" job="Decoration Chef"  variants={cardVariants} />
                    <TeamCard ImgTeam={imgTeam2} name="Jemes Born" job="Executive Chef"  variants={cardVariants}/>
                    <TeamCard ImgTeam={imgTeam3} name="Martin Hill" job="Kitchen Porter" variants={cardVariants} />
                    <TeamCard ImgTeam={imgTeam4} name="Adam Smith" job="Head Chef" variants={cardVariants} />
                </motion.div>
            </div>
        </div>
    )
}

export default OurTeam
