import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import carousel1 from '../../assets/images/carousel/carousel1.png';
import carousel2 from '../../assets/images/carousel/carousel2.png';

import carousel3 from '../../assets/images/carousel/carousel3.png';
import carousel4 from '../../assets/images/carousel/carousel4.png';
import carousel5 from '../../assets/images/carousel/carousel5.png';
import carousel6 from '../../assets/images/carousel/carousel6.png';

import './carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <>
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          speed={800}
          pagination={{ clickable: true }}
          className="swiper"
        >
          <SwiperSlide>
            <img src={carousel1} alt="" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel2} alt="" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel3} alt="" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel4} alt="" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel5} alt="" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel6} alt="" className="carousel-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
