import React from 'react';

import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import Button from './Button.jsx'
import NavbarItem from './NavbarItem.jsx';

const Header = () => {

  const navLinks = [
    'About',
    'Careers',
    'Events',
    'Products',
    'Support'
  ]

  const renderLinks = () => {
    return navLinks.map(link => (<NavbarItem link='#' nameLink={link} />))
  }

  const button =
    <Button type="navbar-toggler">
      <span className="navbar-toggler-icon fs-1"></span>
    </Button>

  return (
    <header id="header" className="header">
      <div className="container">
        <Navbar logo="loopstudios" button={button} id="header-navbar" bootstrap="navbar navbar-expand-lg navbar-dark bg-light">
          {renderLinks()}
        </Navbar>
        <Hero />
      </div>
    </header>
  );
};

export default Header;
