import React from "react";
import './Welcome.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

function Welcome(props) {
  const isProfileRoute = useMatch({ path: '/profile', exact: false });

  return (
    <div className="welcome">
      <Link to="/" className={`welcome__logo-link ${isProfileRoute ? 'welcome__logo-link_inactive' : ""}`}>
        <img src={logo} alt="логотип" className="welcome__logo" />
      </Link>
      <h2 className={`welcome__title ${isProfileRoute ? 'welcome__title_type_profile' : ""}`}>{props.title}{props.name}!</h2>
    </div>    
  );
}

export default Welcome;