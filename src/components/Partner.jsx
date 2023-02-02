import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function partner() {
  const [slide, setSlide] = useState();
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mt-[70px]  mb-[75px] relative">
        <h4 className="text-[#757575] text-[26px] font-semibold leading-[34px] mb-2">
          We partner with global enterprises and high-growth companies
        </h4>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(sliding) => setSlide(sliding)}
          loop
          className="flex space-x-10 mt-10"
        >
          {[
            {
              img: "https://10pearls.com/wp-content/uploads/2021/10/GDPR.png",
              title: "GPDR Demystified",
            },
            {
              img: "https://10pearls.com/wp-content/uploads/2021/10/Titles_90-Day-mindset-Agile.png",
              title: "10Pearls 90 Day Mindset",
            },
            {
              img: "https://10pearls.com/wp-content/uploads/2021/10/Titles_AlignEnterprise.png",
              title: "How to Align Enterprise Security & User Experience",
            },
          ].map((items, index) => {
            return (
              <SwiperSlide className="group cursor-pointer" key={index}>
                <img src={items.img} />
                <h2 className="group-hover:underline text-[#757575] text-xl font-medium leading-[34px] mt-2 ">
                  {items.title}
                </h2>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SlArrowLeft
          onClick={() => {
            slide.slidePrev();
          }}
          className="w-10 hover:text-[#064aa8] cursor-pointer text-gray-400  absolute -left-20 top-20 h-40"
        />

        <SlArrowRight
          onClick={() => {
            slide.slideNext();
          }}
          className="w-10 hover:text-[#064aa8] cursor-pointer absolute text-gray-400 -right-20 top-20  h-40"
        />
      </div>
    </div>
  );
}

export default partner;
