import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Menu from './pages/Menu/Menu'
import Events from './pages/Events/Events'
import Contact from './pages/Contact/Contact'
import Booking from './pages/Booking/Booking'
import Blogs from './pages/Blogs/Blogs'
import Team from './pages/Team/Team'
import Testimonials from './pages/Testimonials/Testimonials'
import BackToTop_Button from './components/BackToTop_Button/BackToTop_Button'
import { useEffect, useState } from 'react'
import BeginSpinner from './components/BeginSpinner/BeginSpinner'

function App() {

  const [loadingSpinner, setLoadingSpinner] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingSpinner(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loadingSpinner && <BeginSpinner />}

      < BackToTop_Button />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/event" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />

        {/* pages : */}
        <Route path="/book" element={<Booking />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonials />} />

      </Routes>

    </>
  )
}

export default App
