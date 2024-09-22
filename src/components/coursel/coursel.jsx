
import Slider from './slider'

export default function Coursel(){
    return(<>
    <div className="coursel-container w-full h-[100vh]  pl-[20px] flex flex-col ">
        <div className=' flex flex-col bg-white rounded-lg gap-10 py-10'>
        <div className=" flex justify-between p-5 rounded-lg ">
    <div className="coursel-heading text-2xl md:text-4xl font-bold">Избранные работы</div> 
      <div className="controls flex overflow-hidden relative p-5 gap-5">
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>

     </div>
   </div>
        <div className="slider px-5 mr-auto w-full">
    <Slider /> 
        </div>
<div className='w-full flex justify-center '>
<div  className='flex px-3 py-5 w-[90%] items-center justify-center bg-[lightgray] rounded-lg'>
     <div className='max-w-[200px]'>Присоединяйтесь к намв 
         сетях:</div>
      <div className=' flex gap-5 flex-1 justify-center px-5'>
        <div className='px-2 w-full max-w-[100px] min-w-[60px]  flex justify-center items-center  py-1 bg-white rounded-lg'>
            <img className='w-5 h-5' src="./assets/icons/icon.png" alt="" srcset="" /></div>
        <div className='px-5 w-full max-w-[100px] min-w-[60px] flex justify-center items-center bg-white rounded-lg'>
            <img className='w-5 h-5' src="./assets/icons/instagram.png" alt="" srcset="" /></div>
        <div className='px-5 w-full max-w-[100px] min-w-[60px] flex justify-center items-center bg-white rounded-lg'>
            <img className='w-5 h-5' src="./assets/icons/youtube.png" alt="" srcset="" /></div>
    </div >
        </div>
</div>
    
 </div>


   </div>
    </>)
}