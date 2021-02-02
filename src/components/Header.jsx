import React from 'react';

import Hero from './Hero.jsx';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <nav id="navbarNavAltMarkup" className="navbar navbar-expand-lg navbar-dark bg-transparent pt-3 py-5 mb-4">
          <a className="navbar-brand fw-bold fs-2" href="#">loopstudios</a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fs-1"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#">About</a>
              <a className="nav-link" href="#">Carrers</a>
              <a className="nav-link" href="#">Events</a>
              <a className="nav-link" href="#">Product</a>
              <a className="nav-link" href="#">Support</a>
            </div>
          </div>
        </nav>
        <Hero />
      </div>
    </header>
  );
};

export default Header;
