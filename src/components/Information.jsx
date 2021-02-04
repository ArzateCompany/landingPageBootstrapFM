import React from 'react';

const Information = ({ img, title, content }) => {
  return (
    <section className="hero py-5 d-flex d-lg-block">
      <div className="container">
        <figure className="information__image">
          <img src={img} alt="imagen de hero" />
        </figure>
        <div className="information__text bottom-0 end-0 bg-light p-5">
          <h1 className="text-uppercase">{title}</h1>
          <p>
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information;
