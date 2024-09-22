import { useState } from 'react'
import Hero from './components/hero/hero'
import Cards from './components/cards/cards'
import Coursel from './components/coursel/coursel'
import Footer from './components/footer/footer'
function App() {
  return (
    <>
  <div className="main-container w-full h-full flex flex-col gap-10">
    <Hero />
    <Cards />
    <Coursel />
    <Footer />
  </div>
    </>
  )
}

export default App
