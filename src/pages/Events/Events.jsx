import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import OurEvents from '../../components/Sections/Events/OurEvents'
import Footer from '../../components/Footer/Footer'

const Events = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Events" page="Events" path="/event" />

      <OurEvents/>

      <Footer/>
    </>
  )
}

export default Events