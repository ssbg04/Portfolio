import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body>
      <Navbar />
      <App />
      <Footer />
    </Body>
  </StrictMode>,
)
