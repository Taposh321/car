import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function NavigationBar(){
   const [model,setModel]=useState(false)
   const Model=()=>{
    setModel((pre)=>pre?false:true)
   }
return (<>
<div className="nav-conatiner sticky border-[#464545] border-b  w-full flex flex-col md:flex-row  md:items-center py-5  ">
    <div className="flex items-center gap-10 ">
        <div className="logo w-[125px] h-[25px] ">
            <img className="w-full h-auto object-cover " src="assets/logo.png" alt="" srcset="" />
       </div>
        <div className="bg-red-600 px-3 py-1 text-white rounded-md text-center flex items-center justify-center  gap-2"> Услуги</div>
       <div onClick={Model}  className='ml-auto mr-[40px] md:hidden text-white'><FontAwesomeIcon icon={faBars} /></div>
    </div> 
   <div className={`navLinks md:mr-[50px] text-[#343434] md:text-[#d6d3d3] transition-all md:transition-none fixed  md:relative top-0 md:top-auto ${model?'right-0':'right-[-100%]'}  md:right-auto h-[100vh] w-[150px]  md:h-auto  text-sm flex flex-1 flex-col md:flex-row  md:justify-end justify-center items-center  bg-white md:bg-inherit shadow-lg  md:shadow-none gap-5 `}>
     <div onClick={Model} className='absolute top-5 md:hidden'><FontAwesomeIcon  icon={faClose}/> </div>
     <div className="navLink active">Работы</div>
     <div className="navLink">О компании</div>
     <div className="navLink">Акции</div>
     <div className="navLink">Контакты</div>
     <div className="navLink">+7 495 207-75-70</div>
    </div>   
</div>
</>)

}