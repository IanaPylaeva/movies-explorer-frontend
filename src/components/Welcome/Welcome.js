import React from "react";
import './Welcome.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Welcome(props) {
  return (
    <div className="welcome">
      <Link to="/" className="welcome__logo-link">
        <img src={logo} alt="логотип" className="welcome__logo" />
      </Link>
      <h2 className="welcome__title">{props.title}</h2>
    </div>    
  );
}

export default Welcome;