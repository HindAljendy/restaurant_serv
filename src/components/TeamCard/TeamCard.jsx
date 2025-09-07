import React from 'react'
import './TeamCard.css'
import { FaFacebookF, FaInstagram, FaShareAlt, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TeamCard = ({ImgTeam ,name, job , variants }) => {
    return (
        <motion.div 
            variants={variants}
            
            className='team-card'>
            <img src={ImgTeam} alt="ImgTeam" />
            <div className="team-details">
                <h4>{name}</h4>
                <p>{job}</p>
            </div>
            <div className="icons-contact">
                <Link to="/"><FaShareAlt className='icon' /> </Link>
                <Link to="/"><FaFacebookF className='icon' /> </Link>
                <Link to="/"><FaTwitter className='icon' /> </Link>
                <Link to="/"><FaInstagram className='icon' /> </Link>
            </div>
        </motion.div>
    )
}

export default TeamCard