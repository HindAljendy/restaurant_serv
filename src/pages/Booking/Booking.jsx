import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Footer from '../../components/Footer/Footer'
import BookUS from '../../components/Sections/BookUS/BookUS'

const Booking = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Booking " page="Booking" path="/book" />

      <BookUS />

      <Footer/>
    </>
  )
}

export default Booking