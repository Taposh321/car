import React from "react";
export default function Footer (){
    return (
      <>
        <div className="w-full  flex flex-col">
          <div className="footer-wrapper w-full bg-red-500 py-5  flex flex-col md:flex-row items-center text-white gap-10">
            <div className="flex flex-col w-full md:flex-1 justify-center items-center">
              <div className="flex flex-col gap-10">
                <div className="w-full flex flex-col max-w-[300px] gap-5">
                  <div className="text-3xl font-bold">Почему UCT?</div>
                  <div className="text-sm">
                    UCT — это гарантия не только качества, но и стиля! Доверь свой
                    автомобиль профессионалам!
                  </div>
                </div>
                <div className="flex w-full items-center gap-3">
                  <div className="w-full max-w-[150px] cursor-pointer transition-colors hover:bg-white hover:text-black border text-center py-3 rounded-lg">
                    Запись в сервис
                  </div>
                  <div className="w-full max-w-[150px] cursor-pointer transition-colors hover:bg-white hover:text-black border text-center py-3 rounded-lg">
                    Консультация
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex md:flex-1 w-full flex-col gap-5 justify-center items-center">
              <div className="flex w-full justify-center gap-10 py-5">
                <div className="service-item gap-3 flex flex-col w-full max-w-[200px]">\
                  <div className="footerIcon">
                    <img src="./assets/footerIcons/wash.png" alt="Car Wash Equipment" />
                  </div>
                  <div className="service-des flex flex-col gap-2">
                    <div className="font-bold">ОБОРУДОВАНИЕ</div>
                    <div className="text-sm">
                      Автомойка на 2 поста и лучшее итальянское оборудование
                    </div>
                  </div>
                </div>
                <div className="service-item gap-3 flex flex-col w-full max-w-[200px]">
                  <div>
                    <img src="./assets/footerIcons/lift.png" alt="Car Lifts" />
                  </div>
                  <div className="service-des flex flex-col gap-2">
                    <div className="font-bold">ПОДЪЕМНИКИ</div>
                    <div>Рассчитаны на 3,5 и 5 тонн. Поднимем любую машину!</div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center gap-10">
                <div className="service-item gap-3 flex flex-col w-full max-w-[200px]">
                  <div>
                    <img src="./assets/footerIcons/target.png" alt="Competitive Prices" />
                  </div>
                  <div className="service-des flex flex-col gap-2">
                    <div className="font-bold">ЦЕНЫ</div>
                    <div>
                      Лучшие цены и качество на рынке. Довольным будет каждый!
                    </div>
                  </div>
                </div>
                <div className="service-item gap-3 flex flex-col w-full max-w-[200px]">
                  <div>
                    <img src="./assets/footerIcons/Vector.png" alt="Car Painting" />
                  </div>
                  <div className="service-des flex flex-col gap-2">
                    <div className="font-bold">ПОКРАСКА</div>
                    <div>
                      Покрасочная камера Spanesi и магнитный стапель.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5 bg-black text-white font-bold">
              <div className="flex gap-5">
               <a href="http://github.com/Taposh321/car" target="_black">Github</a>
              </div>
          </div>
        </div>
      </>
    );
  };