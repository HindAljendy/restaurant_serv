import React from 'react'
import './HeroPage.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroPage = ({ page_name, page, path }) => {

    return (
        <div className='hero-page'>
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
                    delay: 0.5
                }}

            >
                <h1 className='title-heroPage'>{page_name}</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Pages</Link></li>
                    <li><Link to={path}>{page}</Link></li>
                </ul>
            </motion.div>

        </div>
    )
}

export default HeroPage