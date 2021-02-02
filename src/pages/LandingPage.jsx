import React from 'react';

import CardsContainer from '../components/CardsContainer.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx'
import Information from '../components/Information.jsx';

const LandingPage = () => {
  const informationContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius ultrices erat, non egestas nisi. Donec viverra nunc vitae iaculis iaculis. Phasellus scelerisque venenatis neque, rutrum condimentum mi aliquam quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ullamcorper fringilla justo, in eleifend nulla faucibus vel. Curabitur nec tellus tristique arcu consectetur condimentum a vitae tortor. In blandit eget nibh eu luctus. Integer eget ultrices eros.";
  return (
    <>
      <Header />
      <Information title="the leader in interactive vr" img="https://i.ibb.co/ts481Rh/image-interactive.jpg" content={informationContent} />
      <CardsContainer />
      <Footer />
    </>
  );
};

export default LandingPage;