import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { moviesApiUrl } from '../../utils/constants';
import { addErrorMovies, deleteErrorMovies, searchErrorMovies, messageErrorMovies } from '../../utils/constants';

function Movies({ openPopup }) {
  const [films, setFilms] = React.useState(null);
  const [filmsSaved, setFilmsSaved] = React.useState(null);
  const [preloader, setPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [filmsTumbler, setFilmsTumbler] = React.useState(false);
  const [filmsInputSearch, setFilmsInputSearch] = React.useState('');
  const [MoviesCount, setMoviesCount] = React.useState([]);
  const [filmsShowed, setFilmsShowed] = React.useState(null);
  const [filmsWithTumbler, setFilmsWithTumbler] = React.useState([]);
  const [filmsShowedWithTumbler, setFilmsShowedWithTumbler] = React.useState([]);

  useEffect(() => {
    setMoviesCount(getMoviesCount());
    const handlerResize = () => setMoviesCount(getMoviesCount());
    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  function getMoviesCount() {
    let countCards;
    const clientWidth = document.documentElement.clientWidth;
    const MoviesCountConfig = {
      '1200': [12, 3],
      '481': [8, 2],
      '240': [5, 2],
    };

    Object.keys(MoviesCountConfig)
    .sort((a, b) => a - b)
    .forEach((key) => {
      if (clientWidth > +key) {
        countCards = MoviesCountConfig[key];
      }
    });
    return countCards;
  }

  function handleMore() {
    const spliceFilms = films;
    const newFilmsShowed = filmsShowed.concat(spliceFilms.splice(0, MoviesCount[1]));
    setFilmsShowed(newFilmsShowed);
    setFilms(spliceFilms);
  }

  async function handleGetMovies(inputSearch) {
    /*
    setFilmsTumbler(false);
    localStorage.setItem('filmsTumbler', false);
    */

    if (!inputSearch) {
      setErrorText(searchErrorMovies);
      return false;
    }
    setErrorText('');
    setPreloader(true);

    try {
      const data = await moviesApi.getMovies();
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
      localStorage.setItem('films', JSON.stringify(filterData));
      localStorage.setItem('filmsInputSearch', inputSearch);

      const spliceData = filterData.splice(0, MoviesCount[0]);
      setFilmsShowed(spliceData);
      setFilms(filterData);
      setFilmsShowedWithTumbler(spliceData);
      setFilmsWithTumbler(filterData);
    } catch (err) {
      setErrorText(messageErrorMovies);
      setFilms([]);
      localStorage.removeItem('films');
      localStorage.removeItem('filmsTumbler');
      localStorage.removeItem('filmsInputSearch');
    } finally {
      setPreloader(false);
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
    /*
    localStorage.setItem('films', JSON.stringify(filterDataShowed.concat(filterData)));
    localStorage.setItem('filmsTumbler', tumbler);
    */
    setFilmsShowed(filterDataShowed);
    setFilms(filterData);
  }

  async function savedMoviesToggle(film, favorite) {
    if (favorite) {
      const objFilm = {
        image: moviesApiUrl + film.image.url,
        trailerLink: film.trailerLink,
        thumbnail: moviesApiUrl + film.image.url,
        movieId: film.id,
        country: film.country || 'Неизвестно',
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      };
      try {
        await mainApi.addMovies(objFilm);
        const newSaved = await mainApi.getMovies();
        setFilmsSaved(newSaved);
      } catch (err) {
        openPopup(addErrorMovies);
      }
    } else {
      try {
        await mainApi.deleteMovies(film._id);
        const newSaved = await mainApi.getMovies();
        setFilmsSaved(newSaved);
      } catch (err) {
        openPopup(deleteErrorMovies);
      }
    }
  }

  useEffect(() => {
    mainApi
      .getMovies()
      .then((data) => {
        setFilmsSaved(data);
      })
      .catch((err) => {
        openPopup(`Ошибка сервера ${err}`);
      });

      const localStorageFilms = localStorage.getItem('films');

      if (localStorageFilms) {
        const filterData = JSON.parse(localStorageFilms);
        setFilmsShowed(filterData.splice(0, getMoviesCount()[0]));
        setFilms(filterData);
        setPreloader(false);
      }
      const localStorageFilmsTumbler = localStorage.getItem('filmsTumbler');
      const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');

      if (localStorageFilmsTumbler) {
        setFilmsTumbler(localStorageFilmsTumbler === 'true');
      }
      if (localStorageFilmsInputSearch) {
        setFilmsInputSearch(localStorageFilmsInputSearch);
      }
  }, [openPopup]);

  return (
    <section className="movies">
      <SearchForm
        handleGetMovies={handleGetMovies}
        filmsTumbler={filmsTumbler}
        filmsInputSearch={filmsInputSearch}
        handleGetMoviesTumbler={handleGetMoviesTumbler}
      />
      {preloader && <Preloader />}
      {errorText && <div className="movies__error-text">{errorText}</div>}
      {!preloader && !errorText && films !== null && filmsSaved !== null && filmsShowed !== null && (
        <MoviesCardList handleMore={handleMore} filmsRemains={films} films={filmsShowed} savedMoviesToggle={savedMoviesToggle} filmsSaved={filmsSaved} />
      )}    
    </section>
  );
};

export default Movies;