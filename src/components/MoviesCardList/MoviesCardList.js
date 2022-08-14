import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ films, savedMoviesToggle, filmsSaved, filmsRemains, handleMore }) {
  const { pathname } = useLocation();

  return(
    <section className="movies-card-list">
      {films.length > 0 ? (
        <div className="movies-card-list__container">
          {films.map((film) => (
              <MoviesCard
                key={film._id || film.movieId}
                film={film}
                savedMoviesToggle={savedMoviesToggle}
                filmsSaved={filmsSaved}
              />
          ))}
        </div>
      ) : (
        <div className="movies-card-list__text">Ничего не найдено</div>
      )}
      {filmsRemains.length > 0 && pathname !== '/saved-movies' && (
        <div className="movies-card-list__container-more movies-card-list__container-more_active">
          <button className="movies-card-list__button-more" type="button" name="more" onClick={handleMore}>Ещё</button>
        </div>
      )}     
    </section>
  )
}

export default MoviesCardList;