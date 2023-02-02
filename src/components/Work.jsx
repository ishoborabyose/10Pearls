import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Work() {
  const [slide, setSlide] = useState();
  return (
    <div className="max-w-7xl mx-auto mt-20 relative">
      <div className="space-y-3 mb-10">
        <h3 className="text-[#064aa8] text-[26px] font-semibold leading-[34px]">
          OUR WORK
        </h3>
        <h3 className="text-[#757575] text-[26px] font-semibold leading-[34px]">
          Featured case studies
        </h3>
      </div>

      <Swiper
        spaceBetween={32}
        slidesPerView={3}
        onSwiper={(sliding) => setSlide(sliding)}
        loop
        className="grid grid-flow-col mb-20 h-[33rem]"
      >
        {[
          {
            title: "MedStar Health",
            img: "https://10pearls.com/wp-content/uploads/2021/10/MedStar.webp",
            desc: "Accelerating product delivery for a telemedicine leader.",
          },

          {
            title: "AARP",
            img: "https://10pearls.com/wp-content/uploads/2021/10/aarp.webp",
            desc: "Developing a community experience for caregivers.",
          },

          {
            title: " Decisiv",
            img: "https://10pearls.com/wp-content/uploads/2021/10/Decisiv.webp",
            desc: " Digitalizing communication in the transportation industry.",
          },
        ].map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <h2 className="text-[#757575] text-[26px] font-semibold leading-[34px] mb-2">
                {items.title}
              </h2>
              <div className="relative group cursor-pointer">
                <img src={items.img} alt="" />
                <div className="bg-[#F8F9FA] group-hover:bg-[#064aa8] z-50 p-5 mb-[35.3333px] absolute -bottom-16 left-14">
                  <h4 className="text-[20px] group-hover:text-white leading-[32px] text-[2A2A2A]">
                    {items.desc}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SlArrowLeft
        onClick={() => {
          slide.slidePrev();
        }}
        className="w-10 text-gray-400 hover:text-[#064aa8] cursor-pointer  absolute -left-20 top-60 h-40"
      />

      <SlArrowRight
        onClick={() => {
          slide.slideNext();
        }}
        className="w-10 cursor-pointer absolute text-gray-400  -right-20 top-60  h-40 hover:text-[#064aa8]"
      />

      <button className="text-[#064aa8] cursor-pointer  delay-200 duration-300 hover:text-white hover:bg-[#064aa8] border border-[#064aa8] mx-auto flex  text-[17px] leading-[23.8px] py-[15px] px-[38px] text-center">
        See case studies
      </button>
    </div>
  );
}

export default Work;
