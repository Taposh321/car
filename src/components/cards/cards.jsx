import Card from './card'

export default function Cards(){
    const cards=[{
        title:'Обклейка авто пленкой',
        price:'от 32 000 ₽',
        img:'../assets/cars/image2.png',
        isNewArrival:'Yes'
      },{
        title:'Слесарный ремонт',
        price:'от 2 999 ₽',
        img:'./assets/cars/image3.png',
        isNewArrival:'Yes'
      },{
        title:'Покраска дисков',
        price:'от 2090 ₽',
        img:'./assets/cars/image4.png',
        isNewArrival:'Yes'
      },{
        title:'Тюнинг  системы',
        price:'от 890 ₽',
        img:'./assets/cars/image1.png',
        isNewArrival:'Yes'
      },{
        title:'Кузовной ремонт',
        price:'от 390 ₽',
        img:'./assets/cars/image5.png',
        isNewArrival:'Yes'
      },{
        title:'Кузовной ремонт',
        price:'от 1290 ₽',
        img:'./assets/cars/image7.png',
        isNewArrival:'Yes'
      }]

return(<>
<div className='flex flex-col justify-center items-center   flex-wrap w-full py-10  gap-2'>
<div className='text-white text-3xl font-bold mr-auto ml-[20px] '>наш сервис</div>


    <div className="cards  flex md:flex-wrap  flex-col md:flex-row  items-center md:justify-center overflow-hidden gap-2 ">
      {cards.map((e,i)=> <Card key={i}  title={e.title} price={e.price} img={e.img} isNewArrival={e.isNewArrival} />   
      )
      }
    </div>
    </div>
    </>)
}