import React from 'react';

const Card = (props) => {
  const { topLineText, bottomLineText, url } = props;

  return (
    <div className="card">
      <img src={url} alt="card-image position-relative" />
      <h3 className="card__title text-uppercase position-absolute bottom-0 p-xxl-4">{topLineText}<br />{bottomLineText}</h3>
    </div>
  );
};

export default Card;