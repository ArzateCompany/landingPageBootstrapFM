import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col">
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
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="hero col-12 col-lg-6 text-uppercase border border-light pt-4 py-3 px-4 my-5">
              <h1 className="mb-0 display-4 display-lg-2">
                immersive Experiences<br /> that deliver
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
