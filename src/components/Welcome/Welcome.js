import React from "react";
import './Welcome.css';
import logo from '../../images/logo.svg';

function Welcome(props) {
  return (
    <div className="welcome">
      <img src={logo} alt="логотип" className="welcome__logo" />
      <h2 className="welcome__title">{props.title}</h2>
    </div>    
  );
}

export default Welcome;