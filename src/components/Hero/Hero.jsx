import React from 'react'
import './Hero.css'
import Button from '../Button/Button'
import heroImg from './../../assets/hero.png'
import SmallTitle from '../SmallTitle/SmallTitle'
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <div className="main-container">
            <div className='hero'>

                <div className='heading'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            transform: "translateY(-100vh)"
                        }}
                        animate={{
                            opacity: 1,
                            transform: "translateY(0)"
                        }}
                        transition={{
                            duration: 2,
                            type: 'spring',
                            stiffness: 30,     // قوة الارتداد (أكثر يعني أسرع وأكثر صلابة)
                            damping: 8,        // مقاومة الاهتزاز (أعلى يعني انخفاض الاهتزاز)
                            mass: 1,
                            delay:0.5
                        }}

                    >
                        <SmallTitle small_title=" Welcome to CaterServ" />
                        <h1>Book <span>Cater</span> Serv For Your Dream Event</h1>
                    </motion.div>


                    <motion.div
                        initial={{
                            opacity: 0,
                            x : -300
                        }}
                        animate={{
                            opacity: 1,
                            x : 0
                        }}
                        transition={{
                            duration: 2,
                            type: 'spring',
                            stiffness: 30,
                            damping: 8,
                            mass: 1,
                            delay:0.5
                        }}

                        className='buttons-hero'>
                        <Button title="Book Now" path="/book" />
                        <Button title="Know More" path="/" />
                    </motion.div>
                </div>


                <motion.div
                    initial={{ scale: 0  , opacity:0}}
                    animate={{ scale: 1  , opacity:1}}
                    transition={{
                        duration: 2,
                    }}
                    className='image'>
                    <img src={heroImg} alt="heroImg" />
                </motion.div>

            </div>

        </div>

    )
}

export default Hero