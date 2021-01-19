import React from 'react';

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
      <Footer />
    </>
  );
};

export default LandingPage;