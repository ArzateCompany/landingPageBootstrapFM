import React from 'react';

const Button = ({ type, children, }) => (
  <button
    className={`${type} border-0`}
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#header-navbar"
    aria-controls="header-navbar"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    {children}
  </button>
);

export default Button;
