import React from "react";
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__film-container">
          <img src={loupe} className="search-form__loupe" alt="значок лупа" />
          <input className="search-form__input-film" placeholder="Фильм" type="text" required />
          <button className="search-form__button-find" type="submit"></button>
        </div>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export default SearchForm;