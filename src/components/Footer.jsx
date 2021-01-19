import React from 'react';
import iconFacebook from '../../public/assets/svg/icon-facebook.svg';
import iconInstagram from '../../public/assets/svg/icon-instagram.svg';
import iconPinterest from '../../public/assets/svg/icon-pinterest.svg';
import iconTwitter from '../../public/assets/svg/icon-twitter.svg';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div className="container-xxl">
          <div className="footer__social">
            <div className="row">
              <div className="col">
                <h1>loopstudios</h1>
              </div>
              <div className="col">
                <ul>
                  <li><a href="#"><img src={iconFacebook} /></a></li>
                  <li><a href="#"><img src={iconInstagram} /></a></li>
                  <li><a href="#"><img src={iconPinterest} /></a></li>
                  <li><a href="#"><img src={iconTwitter} /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__nav">
            <div className="row">
              <div className="col">
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className="col">
                <p>© 2021 Loopstudios. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="attribution">

          </div>
          <div className="row text-center">
            <p>
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
              Coded by <a href="">Osvaldo Arzate @ArzateCompany</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
