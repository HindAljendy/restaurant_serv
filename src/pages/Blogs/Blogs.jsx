import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/Sections/HeroPage/HeroPage'
import Footer from '../../components/Footer/Footer'
import Blog from '../../components/Sections/Blog/Blog'

const Blogs = () => {
  return (
    <>
      <Navbar />
      <HeroPage page_name="Our Blog" page="Our Blog" path="/blog" />

      <Blog/>

      <Footer/>
    </>
  )
}

export default Blogs