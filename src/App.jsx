import { useEffect, useState } from 'react'
import Hero from './components/hero/hero'
import Cards from './components/cards/cards'
import Coursel from './components/coursel/coursel'
import Footer from './components/footer/footer'
import { GridLoader } from 'react-spinners'
function App() {
  const [loaded,setLoaded]=useState(false)

  useEffect(() => {
    const img = new Image();
    img.src = './assets/hero.png'; 
    img.onload = () => {
      setLoaded(true);
    };
    
  }, []);

  return (
    <>
          <div  className="main-container w-full min-h-[100vh] flex flex-col gap-5">

    {
      loaded?( 
        <div>
          <Hero  />
        <Cards />
        <Coursel />
        <Footer />
        </div>   
     ):
     <div className='w-full h-[100vh] flex justify-center items-center'>
     <GridLoader color='white'/>
     </div>
    }
  </div>
    </>
  )
}

export default App
