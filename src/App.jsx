import { useEffect, useState } from 'react'
import Hero from './components/hero/hero'
import Cards from './components/cards/cards'
import Coursel from './components/coursel/coursel'
import Footer from './components/footer/footer'
function App() {
  const [loaded,setLoaded]=useState(false)

  useEffect(() => {
    const img = new Image();
    img.src = './assets/heroBg.png'; 
    img.onload = () => {
      setLoaded(true);
    };
    
  }, []);

  return (
    <>
    {
      loaded?( 
      <div  className="main-container w-full h-full flex flex-col gap-5">
        <Hero  />
        <Cards />
        <Coursel />
        <Footer />
      </div>):"Hello"
    }
 
    </>
  )
}

export default App
