import React, { useState } from 'react'
import './Menu.css'
import SmallTitle from '../../SmallTitle/SmallTitle'
import TitleSection from '../../TitleSection/TitleSection'
import FoodMenu from '../../../data/FoodMenu'
import MenuItem from '../../MenuItem/MenuItem'
import Button from '../../Button/Button'
import { delay, motion } from 'framer-motion'


const OurMenu = () => {

    const containerVariants = {
        hidden: { opacity: 0, y: 300 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3, // زمن بين ظهور كل عنصر
                delayChildren: 0.3,
                duration:1 ,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const commonTransition = {
        duration: 2,
        type: 'spring',
        stiffness: 40,
        damping: 8,
        mass: 1,
    };

    //! filter foods menu based on categories ..

    const categories = ['Starter', 'Main Course', 'Drinks', 'Offers', 'Our Special'];

    //? useStata for Store the selected category with a function to update the selected category when the button is clicked.

    const [selectedCategory, setSelectedCategory] = useState('Starter')  //string

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }

    //? function to filters foods menu by selected category

    const filteredFoods = FoodMenu.filter(food => food.category === selectedCategory);
    console.log(filteredFoods);

    //! show Filterd Images :

    const chunkSize = 2;   // Number of elements in each part
    const chunks = [];     // new array 

    for (let i = 0; i < filteredFoods.length; i += chunkSize) {
        chunks.push(filteredFoods.slice(i, i + chunkSize));
    }

    return (
        <div className='section-container  Menus'>
            <div className="section menu page">
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ...commonTransition,
                    }}
                    viewport={{ once: true }}

                    className='heading-section'>
                    <SmallTitle small_title="Our Menu" />
                    <TitleSection title="Most Popular Food in the World" />
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
                            categories.map(category => (
                                <motion.div
                                    key={category}
                                    variants={itemVariants}
                                >
                                    <Button
                                        title={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={selectedCategory === category ? 'active' : ''}

                                    />

                                </motion.div>


                            ))
                        }

                    </motion.div>

                    <motion.div
                        key={selectedCategory}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            ...commonTransition,
                        }}
                        viewport={{ once: true }}

                        className="food-filter">
                        {/* Show images Filterd : */}

                        {
                            chunks.map((chunk, index) => (
                                <div key={index} className="part">
                                    {chunk.map((food) => (
                                        <MenuItem
                                            key={food.id}
                                            menuImage={food.image}
                                            name={food.name}
                                            price={food.price}
                                            description={food.description}
                                            variants={itemVariants}


                                        />
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

export default OurMenu