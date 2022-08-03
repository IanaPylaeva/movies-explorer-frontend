import React from "react";
import './SearchForm.css';
import loupe from '../../images/loupe.svg';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__film-container">
          <img src={loupe} className="search-form__loupe" alt="значок лупа" />
          <input className="search-form__input-film" placeholder="Фильм" type="text" required />
          <button className="search-form__button-find" type="submit"></button>
        </div>
        <div className="search-form__short-film-container">
          <div className="search-form__button-switch">
            <input className="search-form__input-switch" type="checkbox" checked />
            <span className="search-form__slider" />
          </div>
          <p className="search-form__text">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;