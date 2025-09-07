import React, { useState } from 'react'
import './Events.css'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import Button from '../../Button/Button'
import ImageEvent from '../../ImageEvent/ImageEvent'
import EventsImages from '../../../data/EventsImages'
import { delay, motion } from 'framer-motion'

const OurEvents = () => {
    
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

    //! filter images based on TITLES..

    const titles = ['All Events', 'Wedding', 'Corporate', 'Buffet', 'Cocktail'];

    //? useStata for Store the selected Title with a function to update the selected Title when the button is clicked.

    const [selectedTitle, setSelectedTitle] = useState('All Events')  //string

    const handleTitleChange = (title) => {
        setSelectedTitle(title);
    }

    //? function to filters images by selected title 

    const filteredImages = selectedTitle === 'All Events' ? EventsImages
        : EventsImages.filter(image =>
            image.title === selectedTitle
        );

    //! show Filterd Images :

    const chunkSize = 4;   // Number of elements in each part
    const chunks = [];     // new array 

    for (let i = 0; i < filteredImages.length; i += chunkSize) {   // i = 0 , i = 1
        chunks.push(filteredImages.slice(i, i + chunkSize));
    }

    return (
        <div className='section-container  Events'>
            <div className="section event page">
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ...commonTransition,
                    }}
                    viewport={{ once: true }}

                    className='heading-section'>
                    <SmallTitle small_title="Latest Events" />
                    <TitleSection title="Our Social & Professional Events Gallery" />
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

                        className='buttons-filter'>

                        {/* buttons filters : */}

                        {
                            titles.map(title => (

                                <motion.div
                                    variants={itemVariants}
                                    key={title}
                                >
                                    <Button

                                        title={title}
                                        onClick={() => handleTitleChange(title)}
                                        className={selectedTitle === title ? 'active' : ''}
                                    />
                                </motion.div>

                            ))
                        }
                    </motion.div>



                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            duration: 2,
                            type: 'spring',
                            stiffness: 30,
                            damping: 8,
                            mass: 1,
                        }}
                        viewport={{ once: true }}

                        className="images-filter">

                        {/* Show images Filterd : */}

                        {
                            chunks.map((chunk, index) => (
                                <div key={index} className="part">
                                    {chunk.map((event) => (
                                        <ImageEvent key={event.id} title={event.title} imgEvent={event.imgEvent} variants={itemVariants} />
                                    ))}
                                </div>
                            ))
                        }

                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default OurEvents