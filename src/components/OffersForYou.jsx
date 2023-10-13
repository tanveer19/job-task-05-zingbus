import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./OffersForYou.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={{
        //   delay: 2000, // Adjust the delay (in milliseconds) as needed
        //   disableOnInteraction: true, // Set to true if you want to keep autoplay running after user interactions
        // }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-xl" src="/images/offersforyou1.jpg" />
          <div className="absolute">
            <img
              src="/images/zingbus-name-logo.webp"
              className="w-[5px]"
              alt=""
            />
            <p className=" text-white">tex</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/offersforyou2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/offersforyou1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/offersforyou1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/offersforyou1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/offersforyou1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
