import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ loggedIn }) {
  
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="логотип" className="logo" />
      </Link>
      {!loggedIn && <NavTab />}
      {loggedIn && <Navigation />}
    </header>
  );
};

export default Header;