import React, { useEffect } from "react";
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleGetMovies, filmsTumbler, filmsInputSearch, handleGetMoviesTumbler }) {
  const [inputSearch, setInputSearch] = React.useState('');
  const [tumbler, setTumbler] = React.useState(false);
  
  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }

  function handleTumblerChange(evt) {
    const newTumbler = !tumbler;
    setTumbler(newTumbler);
    handleGetMoviesTumbler(newTumbler);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleGetMovies(inputSearch);
  }

  useEffect(() => {
    setTumbler(filmsTumbler);
    setInputSearch(filmsInputSearch);
  }, [filmsTumbler, filmsInputSearch]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__border">
        <div className="search-form__container">
          <form className="search-form__film-container">
            <img src={loupe} className="search-form__loupe" alt="значок лупа" />
            <input className="search-form__input-film" placeholder="Фильм" type="text" value={inputSearch || ''} onChange={handleInputChange} required />
            <button className="search-form__button-find" type="submit" onClick={handleSubmit}></button>
          </form>
          <FilterCheckbox handleTumblerChange={handleTumblerChange} tumbler={tumbler} />
        </div>
      </div>
    </form>
  )
}

export default SearchForm;