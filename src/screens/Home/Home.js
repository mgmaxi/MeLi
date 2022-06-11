import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
      </main>
      <Footer />
    </>
  );
};

export default Home;
