import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import Loader from './components/Loader'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Ensure the app shows even if the loader gets stuck for any reason (e.g., JS hiccup)
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 5000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Loader onLoadComplete={() => setIsLoading(false)} />
      <div className={`font-sora scroll-smooth overflow-x-hidden transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Navbar />
        <Home />
        <Skills />
        <Certificates />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
