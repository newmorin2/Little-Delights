import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import './App.css'
import MenuList from './components/Menu'
import Menu from './components/Menu'
import About from './components/About'
import OurStory from './components/OurStory'
import Contact from './components/Contact'

function App() {
  return(
    <div className='container'>
      <NavBar />
      <Hero />
      <OurStory />
      <Menu />
      <About />
      <Contact />
    </div>
  )
}

export default App
