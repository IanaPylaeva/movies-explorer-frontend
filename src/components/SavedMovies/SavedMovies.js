import React, { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import { deleteErrorMovies, messageErrorMovies } from '../../utils/constants';

function SavedMovies({ openPopup }) {
  const [films, setFilms] = React.useState(null);
  const [preloader, setPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [savedFilmsTumbler, setSavedFilmsTumbler] = React.useState(false);
  const [savedFilmsInputSearch, setSavedFilmsInputSearch] = React.useState('');
  const [filmsSaved, setFilmsSaved] = React.useState(null);

  async function handleGetSavedMovies(params) {
    setErrorText('');
    setPreloader(true);
    
    try {  
      const filmsSaved = await mainApi.getMovies();
      setFilmsSaved(filmsSaved);
     
      let filterData = filmsSaved;
      if (params.inputSearch) {
        filterData = filterData.filter(({ nameRU }) => nameRU.toLowerCase().includes(params.inputSearch.toLowerCase()));
      }
      if (params.tumbler) {
        filterData = filmsSaved.filter(({ duration }) => duration <= 40);
      }
      filterData = [...filterData];
      setFilms(filterData);

      localStorage.setItem('savedFilms', JSON.stringify(filterData));
      
    } catch (err) {
      setErrorText(messageErrorMovies);
      setFilms([]);
      localStorage.removeItem('savedFilms');      
      localStorage.removeItem('savedFilmsTumbler');
      localStorage.removeItem('savedFilmsInputSearch');
    } finally {
      setPreloader(false);
    }
  }
  
  /* Удаление карточки из сохраненных */
  async function savedMoviesToggle(film, favorite) {
    if (!favorite) {
      try {
        await mainApi.deleteMovies(film._id);
        
        const newFilms = await mainApi.getMovies();
        const tumbler = localStorage.getItem('savedFilmsTumbler');
        if(!tumbler) {
          setFilms(newFilms);
        } else (
          setFilms(newFilms.filter(({ duration }) => duration <= 40))
        );
      } catch (err) {
        openPopup(deleteErrorMovies);
      }
    }
  }

    /* Забираем из localStorage последнее состояние фильтров */
    useEffect(() => {
      const savedFilmsTumbler = localStorage.getItem('savedFilmsTumbler');
      const savedFilmsInputSearch = localStorage.getItem('savedFilmsInputSearch');
      setSavedFilmsTumbler(savedFilmsTumbler === 'true');
      setSavedFilmsInputSearch(savedFilmsInputSearch || '');
      
      handleGetSavedMovies({
        inputSearch: savedFilmsInputSearch,
        tumbler: savedFilmsTumbler,
      });
      
    }, []);

  return (
    <section className="saved-movies">
      <SearchForm
        handleFilmsTumblerChange={v => {
          setSavedFilmsTumbler(v);
          if (v) {
            localStorage.setItem('savedFilmsTumbler', 'true');
          } else {
            localStorage.removeItem('savedFilmsTumbler');
          }
          handleGetSavedMovies({
            tumbler: v,
            inputSearch: savedFilmsInputSearch,
          });
        }}
        filmsTumbler={savedFilmsTumbler}
        filmsInputSearch={savedFilmsInputSearch}
        handleFilmsInputSearchChange={v => {
          setSavedFilmsInputSearch(v);
          localStorage.setItem('savedFilmsInputSearch', v);
        }}
        handleFormSubmit={() => {
          handleGetSavedMovies({
            inputSearch: savedFilmsInputSearch,
            tumbler: savedFilmsTumbler,
          });
        }}
      />
      {preloader && <Preloader />}
      {errorText && <div className="saved-movies__error-text">{errorText}</div>}
      {!preloader && !errorText && films !== null && filmsSaved !== null && (
        <MoviesCardList filmsRemains={[]} savedMoviesToggle={savedMoviesToggle} filmsSaved={filmsSaved} films={films}/>
      )}
        <div className="saved-movies__saved-devider"></div>     
    </section>
  );
}

export default SavedMovies;