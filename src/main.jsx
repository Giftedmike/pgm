import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Partners from './components/Partners.jsx'
import Mission from './components/Mission.jsx'
import Projects from './components/Projects.jsx'
import Testimony from './components/Testimony.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NavBar />
    <Banner />
    <About />
    <Service />
    <Partners />
    <Mission />
    <Projects />
    <Testimony />
    <Contact />
    <Footer />
  </StrictMode>,
)
