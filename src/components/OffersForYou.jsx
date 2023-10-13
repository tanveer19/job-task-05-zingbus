import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OffersForYou.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <h3 className="text-4xl font-bold m-4">Offers for you</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2000, // Adjust the delay (in milliseconds) as needed
          disableOnInteraction: true, // Set to true if you want to keep autoplay running after user interactions
        }}
        className="mySwiper"
      >
        <SwiperSlide className="">
          {/* <img className="rounded-xl" src="/images/offersforyou1.jpg" /> */}
          <div className="bg-[url('/images/offersforyou1.jpg')] flex flex-col items-start rounded-2xl">
            <img
              src="/images/zingbus-name-logo.webp"
              className=""
              width={323}
              alt=""
            />
            <p className=" text-white m-4">JOIN</p>
            <p className="text-white">
              Get 25% upto ₹500 OFF your first <br /> zingbus booking with code
              JOIN!
            </p>
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
