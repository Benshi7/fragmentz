import { React } from 'react'
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App () {
  return (
    <>
      <Header />
      <br />
      <Main />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
