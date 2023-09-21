"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../../styles/Courses.module.css";
import { Autoplay, Pagination, Navigation } from 
'swiper/modules';

export default function App() {
  return (<span>
    <Swiper
      style={{ marginBottom: "1rem" }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="Swiper"
    >
      <SwiperSlide>
        <img src="/n1.png" alt="no internet" height={400} width={1600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/11.jpeg" alt="no internet" height={400} width={1600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/12.jpeg" alt="no internet" height={400} width={1600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/13.jpeg" alt="no internet" height={400} width={1600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/15.png" alt="no internet" height={400} width={1600} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/16.jpeg" alt="no internet" height={400} width={1600} />
      </SwiperSlide>
    </Swiper>
    </span>
  );
}
