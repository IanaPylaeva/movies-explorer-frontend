import React, { useEffect } from "react";
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleGetMovies, filmsTumbler, filmsInputSearch, handleGetMoviesTumbler }) {
  const [ inputSearch, setInputSearch] = React.useState('');

  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleGetMovies(inputSearch);
  }

  useEffect(() => {
    setInputSearch(filmsInputSearch);
  }, [filmsInputSearch]);

  return (
    <section className="search-form">
      <div className="search-form__border">
        <div className="search-form__container">
          <form className="search-form__film-container">
            <img src={loupe} className="search-form__loupe" alt="значок лупа" />
            <input className="search-form__input-film" placeholder="Фильм" type="text" value={inputSearch || ''} onChange={handleInputChange} required />
            <button className="search-form__button-find" type="submit" onClick={handleSubmit}></button>
          </form>
          <FilterCheckbox filmsTumbler={filmsTumbler} handleGetMoviesTumbler={handleGetMoviesTumbler} />
        </div>
      </div>
    </section>
  )
}

export default SearchForm;