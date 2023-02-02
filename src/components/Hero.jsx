import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Hero() {
  const [slide, setSlide] = useState();
  return (
    <Swiper
      slidesPerView={1}
      onSwiper={(sliding) => setSlide(sliding)}
      loop
      className="relative"
    >
      <SwiperSlide>
        <div>
          <img
            className="w-full bg-cover"
            src="https://10pearls.com/wp-content/uploads/2020/11/hero-1-img.png"
          />
        </div>

        <div className=" max-w-7xl mx-auto px-4 absolute top-60 left-40">
          <h3 className="text-[30px] leading-[42px] text-[#2a2a2a] mb-[16px] font-light">
            Reimagine with Purpose
          </h3>
          <h6 className="text-[20px] leading-[32px] text-[#2a2a2a] mb-[16px] font-normal">
            We help businesses digitally transform, build new <br /> products,
            and accelerate digital teams.
          </h6>
          <button className="text-[#064aa8] delay-200 duration-300 cursor-pointer hover:text-white hover:bg-[#064aa8] border border-[#064aa8] text-[17px] leading-[23.8px] py-[15px] px-[38px] text-center">
            let's build something
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img
            className="w-full bg-cover"
            src="https://10pearls.com/wp-content/uploads/2020/11/hero-3-img.png"
          />
        </div>

        <div className=" max-w-xl mx-auto px-4 absolute top-60 right-40 ">
          <h3 className="text-[30px] leading-[42px] text-[#2a2a2a] mb-[20px] font-light">
            A recognize tech partner that <br /> guarantees performance
          </h3>
          <div className="grid grid-cols-4 float-left">
            {[
              "https://10pearls.com/wp-content/uploads/2022/08/ey-logo-banner.svg",
              "https://10pearls.com/wp-content/uploads/2020/10/logo-inc-500.svg",
              "https://10pearls.com/wp-content/uploads/2022/08/financial-times-logo-banner.svg",
              "https://10pearls.com/wp-content/uploads/2020/10/garnter-logo.svg",
              "https://10pearls.com/wp-content/uploads/2020/10/forrester-research-logo.svg",
              "https://10pearls.com/wp-content/uploads/2022/08/timmy-awards-bw.png",
              "https://10pearls.com/wp-content/uploads/2021/10/Washingtonian_logo.webp",
              "https://10pearls.com/wp-content/uploads/2021/10/Washington-Business.webp",
            ].map((item) => {
              return (
                <div className="">
                  {" "}
                  <img src={item} className="w-1/2" alt="" />{" "}
                </div>
              );
            })}
          </div>
          <button className="text-[#064aa8] cursor-pointer mt-8 hover:text-white hover:bg-[#064aa8] border border-[#064aa8] text-[17px] leading-[23.8px] py-[15px] px-[38px] text-center">
            let's build something
          </button>
        </div>
      </SwiperSlide>

      <SlArrowLeft
        onClick={() => {
          slide.slidePrev();
        }}
        className="w-10 text-gray-400 hover:text-[#064aa8] cursor-pointer  absolute left-0 z-10 top-80 h-40"
      />

      <SlArrowRight
        onClick={() => {
          slide.slideNext();
        }}
        className="w-10 absolute hover:text-[#064aa8] cursor-pointer text-gray-400 right-0 z-10 top-80  h-40"
      />
    </Swiper>
  );
}

export default Hero;
