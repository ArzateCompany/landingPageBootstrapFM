import React from 'react';
import iconFacebook from '../../public/assets/svg/icon-facebook.svg';
import iconInstagram from '../../public/assets/svg/icon-instagram.svg';
import iconPinterest from '../../public/assets/svg/icon-pinterest.svg';
import iconTwitter from '../../public/assets/svg/icon-twitter.svg';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div className="footer__social py-4">
          <div className="container">
            <div className="row py-3">
              <div className="col align-self-center">
                <p className="mb-0 fs-3">loopstudios</p>
              </div>
              <div className="col">
                <nav className="navbar navbar-light justify-content-end align-items-center py-0">
                  <ul className="navbar-nav flex-row">
                    <li className="nav-item mx-2"><a className="nav-link" href="#"><img className="w-100" src={iconFacebook} /></a></li>
                    <li className="nav-item mx-2"><a className="nav-link" href="#"><img className="w-100" src={iconInstagram} /></a></li>
                    <li className="nav-item mx-2"><a className="nav-link" href="#"><img className="w-100" src={iconPinterest} /></a></li>
                    <li className="nav-item mx-2"><a className="nav-link" href="#"><img className="w-100" src={iconTwitter} /></a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <nav className="navbar navbar-light align-items-center py-0">
                  <ul className="navbar-nav flex-row">
                    <li className="nav-item mx-2"><a className="nav-link text-light" href="#">About</a></li>
                    <li className="nav-item mx-2"><a className="nav-link text-light" href="#">Careers</a></li>
                    <li className="nav-item mx-2"><a className="nav-link text-light" href="#">Events</a></li>
                    <li className="nav-item mx-2"><a className="nav-link text-light" href="#">Products</a></li>
                    <li className="nav-item mx-2"><a className="nav-link text-light" href="#">Support</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col">
                <p className="m-0 text-end">© 2021 Loopstudios. All rights reserved.</p>
              </div>
            </div>
            <div className="attribution">

            </div>
            <div className="row text-center">
              <p>
                Challenge by <a className="text-light" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
              Coded by <a className="text-light" href="">Osvaldo Arzate @ArzateCompany</a>.
            </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
