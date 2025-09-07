import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/Sections/AboutUs/AboutUs'
import VideoPlayer from '../../components/Sections/VideoPlayer/VideoPlayer'

const About = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <HeroPage page_name="About Us" page="About" path="/about" />

      <AboutUs setPlayState={setPlayState} />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
      <Footer />
    </>

  )
}

export default About