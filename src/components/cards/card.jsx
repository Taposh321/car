import { useState } from "react"

export default function Card({title,img,price,isNewArrival}){
   const [isHover,setIsHover]=useState(false)
   
   const enterHandler=()=>{
    setIsHover(true)
   }
   const leaveHandler=()=>{
      setIsHover(false)
         }
   
    return(<>
     <div onMouseEnter={enterHandler} onMouseLeave={leaveHandler} className="card overflow-hidden flex w-full max-w-[480px]   md:max-w-[406px]  pl-5 bg-[#343435] h-[220px]
      justify-between rounded-md" >
       <div className="car-description flex  flex-col justify-around  text-xl text-[#d6d3d3]">
          <div className="title  relative flex  h-80  w-[200px] ">
 
         <div className={` duration-[.2s] transition-all top-[40%] absolute ${isHover?"font-normal top-[30px] text-lg":'top-[60%]  font-bold'}`}>{title}</div>
         <div className={`w-[80px] text-sm flex justify-center items-center rounded-lg transition-opacity delay-100  bottom-0 ${isHover?"opacity-1":"opacity-0"} absolute py-1 bg-red-500`}>
            Get
         </div>
              </div>
          <div className="price relative flex  w-full h-full overflow-hidden"><div className={`absolute transition-all delay-200 ${isHover?"opacity-1 top-[10px]":"opacity-0 top-0"}`}>{price}</div></div>
       </div>
       <div className="car-photo relative flex items-center  ">
         <div className={`absolute transition-all bg-red-500 w-full h-full z-0 top-0  ${isHover?"left-0":"left-[100%]"} `}></div>
         <div className="w-[250px] z-10">   
            <img className={` h-auto transition-all duration-300 object-cover ${isHover?"ml-[-5]":"ml-5"}`} src={img} alt="" srcset="" />
         </div>
       </div>
       </div>
    </>
    )
}