import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import ProductCardVertical from '../../components/ProductCardVertical/ProductCardVertical';
import { getProducts } from '../../services/Products';
import benefits1 from '../../assets/images/benefits/benefits1.png';
import benefits2 from '../../assets/images/benefits/benefits2.png';
import benefits3 from '../../assets/images/benefits/benefits3.png';

import './home.css';

const Home = () => {
  const [televisionsList, setTelevisionsList] = useState([]);
  const [computingList, setComputingList] = useState([]);
  const [furnitureList, setFurnitureList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const televisionData = await getProducts('televisores');
        setTelevisionsList(televisionData.data.results);
        const computingData = await getProducts('computación');
        setComputingList(computingData.data.results);
        const furnitureData = await getProducts('muebles');
        setFurnitureList(furnitureData.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="home-main">
        <Carousel />

        <section className="section-container">
          <h2 className="section-title">Televisores</h2>
          <div className="cards-row">
            <Swiper
              modules={[Navigation]}
              navigation
              speed={800}
              className="swiper swiper-row"
              breakpoints={{
                640: {
                  width: 1200,
                  slidesPerView: 5,
                },
              }}
            >
              {televisionsList.slice(0, 15).map((product) => {
                return (
                  <SwiperSlide className="swiperslide">
                    <ProductCardVertical key={product.id} product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>

        <section className="section-container">
          <h2 className="section-title">Muebles</h2>
          <div className="cards-row">
            <Swiper
              modules={[Navigation]}
              navigation
              speed={800}
              className="swiper swiper-row"
              breakpoints={{
                640: {
                  width: 1200,
                  slidesPerView: 5,
                },
              }}
            >
              {furnitureList.slice(0, 15).map((product) => {
                return (
                  <SwiperSlide className="swiperslide">
                    <ProductCardVertical key={product.id} product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>

        <section className="benefits-section-container">
          <h2 className="section-title">Beneficios de Mercado Puntos</h2>
          <div className="cards-row">
            <img
              src={benefits1}
              alt="Beneficios de Mercado Puntos"
              className="benefits-card"
            />
            <img
              src={benefits2}
              alt="Beneficios de Mercado Puntos"
              className="benefits-card"
            />
            <img
              src={benefits3}
              alt="Beneficios de Mercado Puntos"
              className="benefits-card"
            />
          </div>
        </section>

        <section className="section-container">
          <h2 className="section-title">Computación</h2>
          <div className="cards-row">
            <Swiper
              modules={[Navigation]}
              navigation
              speed={800}
              className="swiper swiper-row"
              breakpoints={{
                640: {
                  width: 1200,
                  slidesPerView: 5,
                },
              }}
            >
              {computingList.slice(0, 15).map((product) => {
                return (
                  <SwiperSlide className="swiperslide">
                    <ProductCardVertical key={product.id} product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
