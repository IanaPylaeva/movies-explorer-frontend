import React, { useEffect } from "react";
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ film, savedMoviesToggle, filmsSaved }) {
  const [favorite, setFavorite] = React.useState(false);
  const { pathname } = useLocation();
  
  function handleFavoriteToggle() {
  const newFavorite = !favorite;
  const savedFilm = filmsSaved.filter((obj) => {
    return obj.movieId == film.id;
  });
    savedMoviesToggle({ ...film, _id: savedFilm.length > 0 ? savedFilm[0]._id : null }, newFavorite);
  }
  
  function handleFavoriteDelete() {
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
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, [pathname, filmsSaved, film.id]);

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__text">{film.nameRU}</p>
          <p className="movies-card__time">{getMovieDuration(film.duration)}</p>
        </div>
        {pathname === '/saved-movies' ? (
          <button type="button" className="movies-card__button movies-card__button_type_remove" onClick={handleFavoriteDelete} />
        ) : (
          <button type="button" className={`movies-card__button ${favorite ? 'movies-card__button_type_saved' : ""}`} onClick={handleFavoriteToggle} />
        )}
      </div>
      <a className="movies-card__image-link" href={pathname === '/saved-movies' ? `${film.trailerLink}` : `${film.trailerLink}`} target="_blank" rel="noreferrer">
        <img src={pathname === '/saved-movies' ? `${film.image}` : `https://api.nomoreparties.co${film.image.url}`} className="movies-card__image" alt={film.nameRU}></img>
      </a>
    </section>
  )
}

export default MoviesCard;
