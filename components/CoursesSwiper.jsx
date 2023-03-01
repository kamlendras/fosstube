import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/Courses.module.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
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
          <img src="/14.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/11.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/12.jpeg" alt="no internet"height={400} width={1600} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/13.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/15.png" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/16.jpeg" alt="no internet" height={400} width={1600}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
