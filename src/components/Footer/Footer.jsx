import React from 'react'
import './Footer.css'
import { FaCheck, FaClock, FaCopyright, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import ImgMenu1 from './../../assets/menu-01.jpg'
import ImgMenu2 from './../../assets/menu-02.jpg'
import ImgMenu3 from './../../assets/menu-03.jpg'
import ImgMenu4 from './../../assets/menu-04.jpg'
import ImgMenu5 from './../../assets/menu-05.jpg'
import ImgMenu6 from './../../assets/menu-06.jpg'

const Footer = () => {
    return (
        <>
            <div className='main-container'>
                <div className='footer'>
                    <div className="content">
                        <div className="footer-item-1">
                            <h1>Cater<span>Serv</span></h1>
                            <p>There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
                            <div className='icons-footer'>
                                <Link to="/"><FaFacebookF className='icon' /> </Link>
                                <Link to="/"><FaTwitter className='icon' /> </Link>
                                <Link to="/"><FaInstagram className='icon' /> </Link>
                                <Link to="/"><FaLinkedinIn className='icon' /> </Link>
                            </div>
                        </div>

                        <div className="footer-item-2">
                            <h4>Special Facilities</h4>
                            <ul>
                                <li> <FaCheck className='icon' /> Cheese burger</li>
                                <li> <FaCheck className='icon' /> Sandwich</li>
                                <li> <FaCheck className='icon' /> Panner Burger</li>
                                <li> <FaCheck className='icon' /> Special Sweets</li>
                            </ul>
                        </div>

                        <div className="footer-item-3">
                            <h4>Contact Us</h4>
                            <ul>
                                <li> <FaMapMarkerAlt className='icon' />123 Street, New York, USA</li>
                                <li> <FaPhoneAlt className='icon' />  (+012) 3456 7890 123</li>
                                <li> <MdEmail className='icon' />  info@example.com</li>
                                <li> <FaClock className='icon' />  26/7 Hours Service</li>
                            </ul>
                        </div>

                        <div className="footer-item-4">
                            <h4>Social Gallery</h4>
                            <div>
                                <div className='images-menu'>
                                    <img src={ImgMenu1} alt="ImgMenu1 " />
                                    <img src={ImgMenu2} alt="ImgMenu2 " />
                                    <img src={ImgMenu3} alt="ImgMenu3 " />
                                </div>
                                <div className='images-menu space-top'>
                                    <img src={ImgMenu4} alt="ImgMenu4 " />
                                    <img src={ImgMenu5} alt="ImgMenu5 " />
                                    <img src={ImgMenu6} alt="ImgMenu6 " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* copy right footer */}
            <div className='container-copy-right'>
                <div className="copy-right">
                    <p> <FaCopyright /> <span>This is me Hind Jendy</span>, Frontend Developer.</p>
                    <p> I enjoy discussing new projects and design challenges.</p>
                </div>
            </div>
        </>
    )
}

export default Footer