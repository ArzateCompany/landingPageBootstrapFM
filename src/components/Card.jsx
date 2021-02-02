import React from 'react';

const Card = ({ text, url }) => {
  return (
    <div className="card-body position-relative d-inline-block">
      <img src={url} alt="card-image" />
      <h3 className="text-uppercase position-absolute bottom-0 p-3 text-light w-25">{text}</h3>
    </div>
  );
};

export default Card;