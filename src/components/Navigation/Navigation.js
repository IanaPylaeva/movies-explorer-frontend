import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  const [showItems, setShowItems] = React.useState(false);
  function handleToggleMenu() {
    setShowItems(!showItems);
  }
  
  return (
    <nav className="navigation" >
      <button className="navigation__button-menu" type="button" onClick={handleToggleMenu}></button>
      <div className={`navigation__background ${showItems ? 'navigation__background_active' : ''}`}>
      <div className={`navigation__container ${showItems ? 'navigation__container_active' : ''}`}>
        <button className="navigation__button-close" type="button" onClick={handleToggleMenu}></button>
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link to="/" className="navigation__link">Главная</Link>
          </li>
          <li className="navigation__list-item">
            <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <NavLink to="/profile" className="navigation__link-button">Аккаунт</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;