import React from 'react';

const Navbar = ({ children, logo, button, bootstrap, id }) => {
  const haveLogo = () => {
    if (logo) {
      return <a className="navbar-brand fw-bold fs-2" href="#">{logo}</a>
    }
  };

  const haveButton = () => {
    if (button) {
      return button;
    };
  };

  return (
    <nav className={`${bootstrap} pt-3 py-5 mb-4 bg-transparent`}>
      {haveLogo()}
      {haveButton()}
      <div className="collapse navbar-collapse" id={id}>
        <ul className="navbar-nav ms-auto">
          {children}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;