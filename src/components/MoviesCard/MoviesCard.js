import React from "react";
import './MoviesCard.css';
import { useMatch } from 'react-router-dom';

function MoviesCard(props) {
  const isSavedMoviesRoute = useMatch({ path: '/saved-movies', exact: false });
  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__text">{props.title}</p>
          <p className="movies-card__time">{props.time}</p>
        </div>
        <button 
          className={`movies-card__button ${props.isSaved ? 'movies-card__button_type_saved' : ""} ${isSavedMoviesRoute ? 'movies-card__button_type_remove' : ""}`}
          type="button">
        </button>
      </div>
      <img src={props.image} className="movies-card__image" alt="изображение фильма"></img>
    </section>
  )
}

export default MoviesCard;
