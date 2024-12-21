import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Story from './component/Story'
import Services from './component/Services'
import Portfolio from './component/portfolio'
import Pricing from './component/pricing'
import Team from './component/Team'
import Make from './component/Make'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App  () {

  return (
    <div>
      <Navbar/>
      <Home />
      <Story />
      <Services />
      <Portfolio />
      <Pricing />
      <Team />
      <Make />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App