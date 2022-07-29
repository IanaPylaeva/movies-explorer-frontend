import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  const [showItems, setShowItems] = useState(false);

  function handleToggleMenu() {
    setShowItems(!showItems);
  }

  return (
    <nav className="navigation">
      <button className="navigation__button-menu" type="button" onClick={handleToggleMenu}></button>
      <div className={`navigation__container ${showItems ? 'navigation__container_active' : ''}`}>
        <div className="navigation__sidebar">
          <button className="navigation__button-close" type="button" onClick={handleToggleMenu}></button>
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <Link to="/" className="navigation__link">Главная</Link>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <NavLink to="/profile" className="navigation__link" activeClassName="navigation__link_active">Аккаунт</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;