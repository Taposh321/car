import NavigationBar from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGreaterThan} from '@fortawesome/free-solid-svg-icons'
export default function Hero (){

    return (<>
    <div className="hero-container flex flex-col h-[100vh] min-h-[500px] w-full  pl-[20px]">
    <NavigationBar />
    <div className=' flex  flex-1 items-center'>
      <div className="inner-hero flex flex-col gap-5 max-w-[460px] h-[400px] justify-center">
       <div className="hero-text text-white  text-4xl  lg:text-5xl">
       Премиальное обслуживание
вашего автомобиля
       </div>
       <div className='cta flex text-white gap-5'>
       <div  className=' px-3 bg-red-600  rounded-md  flex items-center gap-3'>span Запись в сервис <FontAwesomeIcon icon={faGreaterThan} size='sm' className='mt-1' /></div>
       <div  className='py-2 px-3 border rounded-md flex gap-2'>
        <span><img src="./assets/message.png" alt="" srcset="" /></span> Консультация</div>
       </div>
      </div>
    </div>
    </div>
    </>)
}