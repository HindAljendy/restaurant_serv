import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Footer from '../../components/Footer/Footer'
import OurTeam from '../../components/Sections/Team/OurTeam'


const Team = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Our Team" page="Our Team" path="/team" />

      <OurTeam />

      <Footer />
    </>
  )
}
export default Team