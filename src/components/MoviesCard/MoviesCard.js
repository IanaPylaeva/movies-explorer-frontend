import React from "react";
import './MoviesCard.css';
import { useMatch } from 'react-router-dom';

function MoviesCard(props) {
  const isSavedMoviesRoute = useMatch({ path: '/saved-movies', exact: true });
  const [isSaved, setIsSaved] = React.useState(false);

  function handleSaveToggle() {
    setIsSaved(!isSaved);
  }

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <section className={`movies-card ${isSavedMoviesRoute ? 'movies-card_type_saved' : ""}`}>
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__text">{props.title}</p>
          <p className="movies-card__time">{props.time}</p>
        </div>
        <button 
          className={`movies-card__button ${isSaved ? 'movies-card__button_type_saved' : ""} ${isSavedMoviesRoute ? 'movies-card__button_type_remove' : ""}`}
          onClick={handleSaveToggle}
          type="button">
        </button>
      </div>
      <img src={props.card} className="movies-card__image" alt="изображение фильма" onClick={handleClick}></img>
    </section>
  )
}

export default MoviesCard;
