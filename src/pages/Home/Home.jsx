import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Blog from '../../components/Sections/Blog/Blog'
import AboutUs from '../../components/Sections/AboutUs/AboutUs'
import VideoPlayer from '../../components/Sections/VideoPlayer/VideoPlayer'
import { useState } from 'react'
import BookUS from '../../components/Sections/BookUS/BookUS'
import OurTeam from '../../components/Sections/Team/OurTeam'
import OurServices from '../../components/Sections/Services/OurServices'
import OurMenu from '../../components/Sections/Menu/OurMenu'
import OurEvents from '../../components/Sections/Events/OurEvents'


const Home = () => {
  
  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />

      <AboutUs setPlayState={setPlayState} />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />

      <OurServices />
      <OurTeam />
      <OurEvents />
      <OurMenu />
      <BookUS />

      <Blog />
      <Footer />

    </div>
  )
}

export default Home