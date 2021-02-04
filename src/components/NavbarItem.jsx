import React from 'react';

const NavbarItem = ({ link, nameLink, nameItem }) => {

  const haveLink = () => {
    if (link) {
      return <a className="nav-link" aria-current="page" href={link}>{nameLink}</a>
    } else {
      return <span>{nameItem}</span>
    };
  };

  return (
    <li className="nav-item">
      {haveLink()}
    </li>
  );
};

export default NavbarItem;
