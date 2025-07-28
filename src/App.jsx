import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Content from './components/content.jsx'
import Projects from './components/projects.jsx'

function App() {


  return (
    <>
      <Header></Header>
      <Content/>
      <Projects/>


  
    </>
  )
}

export default App
