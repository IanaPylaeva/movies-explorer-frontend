import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ loggedIn }) {
  
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="логотип" className="header__logo" />
        </Link>
        {!loggedIn && <NavTab />}
        {loggedIn && <Navigation />}
      </div>
    </header>
  );
};

export default Header;