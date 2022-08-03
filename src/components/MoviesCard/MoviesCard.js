import React from "react";
import './MoviesCard.css';
import { useMatch } from 'react-router-dom';

function MoviesCard({ isSaved, image }) {
  const isSavedMoviesRoute = useMatch({ path: '/saved-movies', exact: false });
  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__text">33 слова о дизайне</p>
          <p className="movies-card__time">1ч 47м</p>
        </div>
        <button 
          className={`movies-card__button ${isSaved ? 'movies-card__button_type_saved' : ""} ${isSavedMoviesRoute ? 'movies-card__button_type_remove' : ""}`}
          type="button">
        </button>
      </div>
      <img src={image} className="movies-card__image" alt="изображение фильма"></img>
    </section>
  )
}

export default MoviesCard;
