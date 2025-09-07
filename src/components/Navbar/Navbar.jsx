import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'


const Navbar = () => {

    //! useState for put class active on selected item  :
    const [selectedItem, setSelectedItem] = useState(''); // empty string
    const handelItemClick = (item) => setSelectedItem(item);

    //! useState for  open menu mobile and apply style menu-icon when click :
    const [click, setClick] = useState(false) // boolean
    const handleClick = () => setClick(!click);

    //! useState for  Control the appearance of the dropdown in small screen :
    const [isDropdownOpen, setDropdownOpen] = useState(false); // boolean

    const handleClickDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleMouseEnter = () => {
        if (window.innerWidth > 992) {
            setDropdownOpen(true)
        }
    }

    const handleMouseLeave = () => {
        if (window.innerWidth > 992) {
            setDropdownOpen(false)
        }
    }

    return (
        <>
            <div className='main-container  bottom-line'>
                <nav className='navbar '>
                    {/* logo */}
                    <h1 className='logo'>Cater
                        <span>Serv</span>
                    </h1>

                    {/* navlinks */}
                    <ul className={`navlinks ${click ? 'show-navlinks' : 'hide-navlinks'}`}>
                        <li>
                            <Link to="/"
                                className={selectedItem === 'home' ? 'active' : ''}
                                onClick={() => handelItemClick('home')}>
                                Home</Link>
                        </li>
                        <li>
                            <Link to="/about"
                                className={selectedItem === 'about' ? 'active' : ''}
                                onClick={() => handelItemClick('about')}>
                                About</Link>
                        </li>
                        <li>
                            <Link to="/service"
                                className={selectedItem === 'servive' ? 'active' : ''}
                                onClick={() => handelItemClick('servive')}>
                                Services</Link>
                        </li>
                        <li>
                            <Link to="/event"
                                className={selectedItem === 'event' ? 'active' : ''}
                                onClick={() => handelItemClick('event')}>
                                Events</Link>
                        </li>
                        <li>
                            <Link to="/menu"
                                className={selectedItem === 'menu' ? 'active' : ''}
                                onClick={() => handelItemClick('menu')}>
                                Menu</Link>
                        </li>

                        {/* dropdown navlink*/}
                        <li className="dropdown"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}

                        >
                            <Link to="" className='dropdown-toggle' onClick={handleClickDropdown}>
                                Pages <RiArrowDropDownLine className='icon' />
                            </Link>
                            {
                                isDropdownOpen && (
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/book"
                                                className={selectedItem === 'book' ? 'active' : ''}
                                                onClick={() => handelItemClick('book')}>
                                                Booking</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog"
                                                className={selectedItem === 'blog' ? 'active' : ''}
                                                onClick={() => handelItemClick('blog')}>
                                                Our Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/team"
                                                className={selectedItem === 'team' ? 'active' : ''}
                                                onClick={() => handelItemClick('team')}>
                                                Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/testimonial"
                                                className={selectedItem === 'testimonial' ? 'active' : ''}
                                                onClick={() => handelItemClick('testimonial')}>
                                                Testimonials</Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>

                        <li>
                            <Link to="/contact"
                                className={selectedItem === 'contact' ? 'active' : ''}
                                onClick={() => handelItemClick('contact')}>
                                Contact</Link>
                        </li>
                    </ul>

                    {/* button */}
                    <div className='buttons'>
                        <button className='search'><FaSearch size="16" /></button>
                        <Button title="Book Now" path="/book" />
                    </div>

                    {/* menu icon */}
                    <div className={`hamburger ${click ? 'outline-style' : ''}`} onClick={handleClick}>
                        < FaBars className='menu-icon'/>             
                    </div>
                </nav>

            </div>

        </>
    )
}

export default Navbar