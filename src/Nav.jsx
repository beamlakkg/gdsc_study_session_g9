
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;