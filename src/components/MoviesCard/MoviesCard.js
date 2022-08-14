import React, { useEffect } from "react";
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ film, savedMoviesToggle, filmsSaved }) {
  const [isSaved, setIsSaved] = React.useState(false);
  const { pathname } = useLocation();
  
  function handleSavedToggle() {
  const newSaved = !isSaved;
  const savedFilm = filmsSaved.filter((obj) => {
    return obj.movieId == film.id;
  });
    savedMoviesToggle({ ...film, _id: savedFilm.length > 0 ? savedFilm[0]._id : null }, newSaved);
  }
  
  function handleSavedDelete() {
    savedMoviesToggle(film, false);
  }
  
  function getMovieDuration(minutes) {
    return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
  }
  
  useEffect(() => {
    if (pathname !== '/saved-movies') {
      const savedFilm = filmsSaved.filter((obj) => {
        return obj.movieId == film.id;
      });
      
      if (savedFilm.length > 0) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    }
  }, [pathname, filmsSaved, film.id]);

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__text">{film.nameRu}</p>
          <p className="movies-card__time">{getMovieDuration(film.duration)}</p>
        </div>
        {pathname === '/saved-movies' ? (
          <button type="button" className="movies-card__button movies-card__button_type_remove" onClick={handleSavedDelete} />
        ) : (
          <button type="button" className={`movies-card__button ${isSaved ? 'movies-card__button_type_saved' : ""}`} onClick={handleSavedToggle} />
        )}
      </div>
      <a className="movies-card__image-link" href={pathname === '/saved-movies' ? `${film.trailerLink}` : `${film.trailerLink}`} target="_blank" rel="noreferrer">
        <img src={pathname === '/saved-movies' ? `${film.image}` : `moviesApiUrl${film.image.url}`} className="movies-card__image" alt={film.nameRu}></img>
      </a>
    </section>
  )
}

export default MoviesCard;
