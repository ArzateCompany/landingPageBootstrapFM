import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <nav id="navbarNavAltMarkup" className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Loopstudios</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="#">About</a>
                <a className="nav-link" href="#">Carrers</a>
                <a className="nav-link" href="#">Events</a>
                <a className="nav-link" href="#">Product</a>
                <a className="nav-link" href="#">Support</a>
              </div>
            </div>
          </nav>
          <div className="row">
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="hero col-6  me-auto col-lg-2 text-uppercase p-3 pe-0">
              inmersive<br />
              Experiences that deliver
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
