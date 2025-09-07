import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './AboutCard.css'

const AboutCard = ({ icon, number, text }) => {

    const { ref, inView } = useInView({ triggerOnce: true })

    const controls = useAnimation()
    const [displayNumber, setDisplayNumber] = useState(0)

    // عند ظهور العنصر، بدء  تعيين العد
    useEffect(() => {
        if (inView) {
            setDisplayNumber(0)
            // يمكن هنا إضافة حركة ظهور
            controls.start({ opacity: 1 })
        }
    }, [inView, controls])

    // لعمل العد 
    useEffect(() => {
        if (inView && displayNumber < number) {

            let start = displayNumber

            const end = number
            const duration = 1500   /* ms */
            const incrementTime = 30

            const step = () => {
                start += Math.ceil(end / (duration / incrementTime))    //  Math.ceil(5.06) -> 6

                if (start >= end) {
                    start = end
                    clearInterval(timer)
                }
                setDisplayNumber(start)

            }

            const timer = setInterval(step, incrementTime)   //  incrementTime = 30
            return () => clearInterval(timer)
        }
    }, [inView, number, displayNumber])

    return (
        <div className='about-card' ref={ref}>
            <div className='icon'>
                {icon}
            </div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ delay: 0.5 }}

            >
                {displayNumber}
            </motion.h1>
            <p>{text}</p>
        </div>
    )
}

export default AboutCard