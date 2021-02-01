import React from 'react';

const Hero = () => {
  return (
    <section className="hero py-5">
      <div className="row">
        <div className="col-lg-5 py-5">
          <figure className="hero__image">
            <img src="https://i.ibb.co/ts481Rh/image-interactive.jpg" alt="imagen de hero" />
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="hero__text">
            <h1 className="text-uppercase">the leader in<br /> interactive vr</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius ultrices erat, non egestas nisi. Donec viverra nunc vitae iaculis iaculis. Phasellus scelerisque venenatis neque, rutrum condimentum mi aliquam quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ullamcorper fringilla justo, in eleifend nulla faucibus vel. Curabitur nec tellus tristique arcu consectetur condimentum a vitae tortor. In blandit eget nibh eu luctus. Integer eget ultrices eros.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
