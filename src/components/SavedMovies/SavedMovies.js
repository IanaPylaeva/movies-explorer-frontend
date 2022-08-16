import React, { useEffect } from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi.js';

function SavedMovies({ openPopup }) {
  const [films, setFilms] = React.useState(null);
  const [preloader, setPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [filmsTumbler, setFilmsTumbler] = React.useState(false);
  const [filmsInputSearch, setFilmsInputSearch] = React.useState('');
  const [filmsShowed, setFilmsShowed] = React.useState([]);
  const [filmsWithTumbler, setFilmsWithTumbler] = React.useState([]);
  const [filmsShowedWithTumbler, setFilmsShowedWithTumbler] = React.useState([]);

  async function handleGetMovies(inputSearch, tumbler) {
    setErrorText('');
    setPreloader(true);
    
    try {
      const data = films;
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
      
      if (tumbler) filterData = filterData.filter(({ duration }) => duration <= 40);
      
      setFilmsShowed(filterData);
      
      if (inputSearch) {
        localStorage.setItem('savedFilms', JSON.stringify(filterData));
        localStorage.setItem('savedFilmsTumbler', tumbler);
        localStorage.setItem('savedFilmsInputSearch', inputSearch);
      } else {
        localStorage.removeItem('savedFilms');
        localStorage.removeItem('savedFilmsTumbler');
        localStorage.removeItem('savedFilmsInputSearch');
      }
    } catch (err) {
      setErrorText(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
      setFilms([]);
      localStorage.removeItem('savedFilms');
      localStorage.removeItem('savedFilmsTumbler');
      localStorage.removeItem('savedFilmsInputSearch');
    } finally {
      setPreloader(false);
    }
  }

  async function savedMoviesToggle(film, favorite) {
    if (!favorite) {
      try {
        await mainApi.deleteMovies(film._id);
        const newFilms = await mainApi.getMovies();
        setFilmsShowed(newFilms);
        setFilms(newFilms);
      } catch (err) {
        openPopup('Во время удаления фильма произошла ошибка.');
      }
    }
  }
  
  async function handleGetMoviesTumbler(tumbler) {
    let filterDataShowed = [];
    let filterData = [];
    
    if (tumbler) {
      setFilmsShowedWithTumbler(filmsShowed);
      setFilmsWithTumbler(films);
      filterDataShowed = filmsShowed.filter(({ duration }) => duration <= 40);
      filterData = films.filter(({ duration }) => duration <= 40);
    } else {
      filterDataShowed = filmsShowedWithTumbler;
      filterData = filmsWithTumbler;
    }
    setFilmsShowed(filterDataShowed);
    setFilms(filterData);
  }
  
  useEffect(() => {
    async function fetchData() {
      const localStorageFilms = localStorage.getItem('savedFilms');
      if (localStorageFilms) {
        setFilms(JSON.parse(localStorageFilms));
        const localStorageFilmsTumbler = localStorage.getItem('savedFilmsTumbler');
        const localStorageFilmsInputSearch = localStorage.getItem('savedFilmsInputSearch');
        
        if (localStorageFilmsTumbler) {
          setFilmsTumbler(localStorageFilmsTumbler === 'true');
        }
        if (localStorageFilmsInputSearch) {
          setFilmsInputSearch(localStorageFilmsInputSearch);
        }
      } else {
        try {
          const data = await mainApi.getMovies();
          setFilms(data);
          setFilmsShowed(data);
        } catch (err) {
          openPopup(`Ошибка сервера ${err}`);
        }
      }
    }
    fetchData();
  }, [openPopup]);

  return (
    <div className="saved-movies">
      <SearchForm
        handleGetMovies={handleGetMovies}
        filmsTumbler={filmsTumbler}
        filmsInputSearch={filmsInputSearch}
        handleGetMoviesTumbler={handleGetMoviesTumbler}
      />
      {preloader && <Preloader />}
      {errorText && <div className="saved-movies__error-text">{errorText}</div>}
      {!preloader && !errorText && films !== null && (
        <MoviesCardList filmsRemains={[]} savedMoviesToggle={savedMoviesToggle} films={filmsShowed} />
      )}
      <div className="saved-movies__saved-devider"></div>
    </div>
  );
}

export default SavedMovies;