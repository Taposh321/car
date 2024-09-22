import { Virtual,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

const slides=[{
img:"./assets/slider/slide1.png",
text:"Бронирование автомобиля пленкой Illumar",
smallText:"Подробнее об услуге"
},
{
  img:"./assets/slider/slide2.png",
  text:"Бронирование автомобиля пленкой Illumar",
  smallText:"Подробнее об услуге"
  },
  {
    img:"./assets/slider/slide5.png",
    text:"Бронирование автомобиля пленкой Illumar",
    smallText:"Подробнее об услуге"
    }
    ,
    {
      img:"./assets/slider/slide4.png",
      text:"Бронирование автомобиля пленкой Illumar",
      smallText:"Подробнее об услуге"
      }
      ,
      {
        img:"./assets/slider/slide4.png",
        text:"Бронирование автомобиля пленкой Illumar",
        smallText:"Подробнее об услуге"
        },
        ,
        {
          img:"./assets/slider/slide4.png",
          text:"Бронирование автомобиля пленкой Illumar",
          smallText:"Подробнее об услуге"
          }

]
export default () => {
  
  // Create array with 1000 slides
 

  return (
    <Swiper className=''
     modules={[Virtual,Navigation]} spaceBetween={10} slidesPerView={1} virtual 
     navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
     breakpoints={{
      // When window width is >= 640px
      580: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // When window width is >= 768px
    850: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // When window width is >= 1024px
      1204: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
    >

      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
         <div className='flex flex-col w-[250px] items-center'>
         <div className=' h-[200px]'>
          <img src={slideContent.img} alt="" srcset="" />
         </div>
         <div className='flex flex-col gap-3'>
          <div> {slideContent.text}</div>
         <div>{slideContent.smallText}</div></div>
         
         </div>
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
};