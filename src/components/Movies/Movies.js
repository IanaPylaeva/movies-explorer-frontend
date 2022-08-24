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
  const [filmsShowed, setFilmsShowed] = React.useState(null);

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
    const moviesCount = getMoviesCount();
    const newFilmsShowed = filmsShowed.concat(
      spliceFilms.splice(0, moviesCount[1])
    );
    setFilmsShowed(newFilmsShowed);
    setFilms(spliceFilms);
  }

  async function handleGetMovies(params) {
    if (!params.inputSearch) {
     setErrorText(searchErrorMovies);
     return false;
    }
    setErrorText('');
    setPreloader(true);
    
    try {
      const data = await moviesApi.getMovies();
      const filmsSaved = await mainApi.getMovies();
      setFilmsSaved(filmsSaved);
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(params.inputSearch.toLowerCase()));
      if (params.tumbler) {
        filterData = filterData.filter(({ duration }) => duration <= 40);
      }
      filterData = [...filterData];
      const moviesCount = getMoviesCount();
      const spliceData = filterData.splice(0, moviesCount[0]);
      setFilmsShowed(spliceData);
      setFilms(filterData);
    } catch (err) {
      openPopup(`Ошибка сервера ${err}`);
      setErrorText(messageErrorMovies);
      setFilms([]);
      localStorage.removeItem('films');
      localStorage.removeItem('filmsTumbler');
      localStorage.removeItem('filmsInputSearch');
    } finally {
      setPreloader(false);
    }
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

  /* Забираем из localStorage последнее состояние фильтров */
  useEffect(() => {
    const filmsTumbler = localStorage.getItem('filmsTumbler') === 'true';
    const filmsInputSearch = localStorage.getItem('filmsInputSearch');
    setFilmsTumbler(filmsTumbler);
    setFilmsInputSearch(filmsInputSearch || '');
    handleGetMovies({
      inputSearch: filmsInputSearch,
      tumbler: filmsTumbler,
    });
  }, []);

  return (
    <section className="movies">
      <SearchForm
        handleFilmsTumblerChange={v => {
          setFilmsTumbler(v);
          if (v) {
            localStorage.setItem('filmsTumbler', 'true');
          } else {
            localStorage.removeItem('filmsTumbler');
          }
          handleGetMovies({
            tumbler: v,
            inputSearch: filmsInputSearch,
          });
        }}
        filmsTumbler={filmsTumbler}
        filmsInputSearch={filmsInputSearch}
        handleFilmsInputSearchChange={v => {
          setFilmsInputSearch(v);
          localStorage.setItem('filmsInputSearch', v);
        }}
        handleFormSubmit={() => {
          handleGetMovies({
            tumbler: filmsTumbler,
            inputSearch: filmsInputSearch,
          });
        }}
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