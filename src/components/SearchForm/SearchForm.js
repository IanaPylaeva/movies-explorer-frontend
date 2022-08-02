import React from "react";
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__film-container">
          <button className="search-form__button-loupe" type="button"></button>
          <input className="search-form__input-film" placeholder="Фильм" type="text" required />
        </div>
        <div className="search-form__short-film-container">

        </div>

      </div>
    </section>
  )

}

export default SearchForm;