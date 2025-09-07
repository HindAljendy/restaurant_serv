import React from 'react'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/Sections/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Contact" page="Contact" path="/contact" />

      <ContactForm/>

      <Footer/>
    </>
  )
}

export default Contact