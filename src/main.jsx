import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import Service from './components/Service.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NavBar />
    <Banner />
    <Service />
  </StrictMode>,
)
