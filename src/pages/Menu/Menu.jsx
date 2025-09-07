import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Footer from '../../components/Footer/Footer'
import OurMenu from '../../components/Sections/Menu/OurMenu'

const Menu = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Menu" page="Menu" path="/menu" />
      
      <OurMenu/>

      <Footer/>
    </>
  )
}

export default Menu