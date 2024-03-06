import React from 'react'
import Main from './Main/Main'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import StarrySky from './StarrySky'

export default function Home() {
  return (
    <>
      <StarrySky />
      <Main />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}