import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Footer from '../../components/Footer/Footer'
import OurServices from '../../components/Sections/Services/OurServices'

const Services = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Services" page="Services" path="/service" />

      <OurServices />

      <Footer />
    </>
  )
}

export default Services