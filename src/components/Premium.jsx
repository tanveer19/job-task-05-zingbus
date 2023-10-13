import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Premium.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Premium = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">Zingbus Premium Lounges</h3>
        <p className="m-3">_____________________</p>
        <h3 className="text-3xl text-[#777] mb-6">Rest, Refresh, Rejuvenate</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={200}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000, // Adjust the delay (in milliseconds) as needed
          disableOnInteraction: true, // Set to true if you want to keep autoplay running after user interactions
        }}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img src="/images/premium1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/premium2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/premium3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <h3 className="text-3xl font-semibold text-center my-16 text-fuchsia-600">
        Explore Our Lounges
      </h3>
    </div>
  );
};

export default Premium;
