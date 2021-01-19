import React from 'react';
import Card from '../components/Card.jsx';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx';
import Title from '../components/Title.jsx';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Title text="our creations" />
      <Card topLineText='deep' bottomLineText='earth' url="https://i.ibb.co/vLhcS7J/image-night-arcade.jpg" />
      <Footer />
    </>
  );
};

export default LandingPage;