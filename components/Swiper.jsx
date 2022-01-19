import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/Courses.module.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    <div className={styles.Swiper}>
      <Swiper
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
        className="mySwiper"
      >
       <SwiperSlide>
          <Image src="/14.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/11.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/12.jpeg" alt="no internet"height={400} width={1600} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/13.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/15.png" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/16.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
