import React from "react";
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleFilmsTumblerChange,
  filmsTumbler,
  filmsInputSearch,
  handleFilmsInputSearchChange,
  handleFormSubmit
}) {
  function handleInputChange(evt) {
    if (handleFilmsInputSearchChange) {
      handleFilmsInputSearchChange(evt.target.value);
    }
  }

  function handleTumblerChange() {
    handleFilmsTumblerChange(!filmsTumbler);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleFormSubmit(filmsInputSearch, filmsTumbler);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__border">
        <div className="search-form__container">
          <div className="search-form__film-container">
            <img src={loupe} className="search-form__loupe" alt="значок лупа" />
            <input className="search-form__input-film" placeholder="Фильм" type="text" value={filmsInputSearch || ''} onChange={handleInputChange} required />
            <button className="search-form__button-find" type="submit" onClick={handleSubmit}></button>
          </div>
          <FilterCheckbox handleTumblerChange={handleTumblerChange} tumbler={filmsTumbler} />
        </div>
      </div>
    </form>
  )
}

export default SearchForm;