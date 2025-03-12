import React from 'react'
import Home from '../components/Home'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div>
      <Home/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default HomePage
