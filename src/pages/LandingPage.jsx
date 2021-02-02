import React from 'react';
import Card from '../components/Card.jsx';

import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx'
import Information from '../components/Information.jsx';
import Title from '../components/Title.jsx';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Information />
      <Title text="our creations" />
      <Card topLineText='deep' bottomLineText='earth' url="https://i.ibb.co/vLhcS7J/image-night-arcade.jpg" />
      <Footer />
    </>
  );
};

export default LandingPage;