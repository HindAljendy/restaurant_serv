import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import TestimonialSlider from '../../components/Sections/TestimonialSlider/TestimonialSlider'
import Footer from '../../components/Footer/Footer'

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Testimonial" page="Testimonial" path="/testimonial" />

      <TestimonialSlider/>
      <Footer/>
    </>
  )
}

export default Testimonials