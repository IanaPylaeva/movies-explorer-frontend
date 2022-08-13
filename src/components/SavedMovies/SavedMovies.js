import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';

import image1 from '../../images/movies-cards/movie-card-1.jpg';
import image2 from '../../images/movies-cards/movie-card-2.jpg';
import image3 from '../../images/movies-cards/movie-card-3.jpg';

const cards = [
  image1,
  image2,
  image3,
];

function SavedMovies(props) {
  return (
    <section className="movies-card-list">
      <SearchForm />
      <div className="movies-card-list__container movies-card-list__container_type_saved">
      {cards.map((card) => {
        return (
        <MoviesCard
          key={card._id}
          card={card}
          onCardClick={props.onCardClick}
          title="33 слова о дизайне"
          time="1ч 47м"
          isSaved={true}
        />
        )})
      }
      </div>
      <div className="movies-card-list__container-more">
        <button className="movies-card-list__button-more" type="button">Ещё</button>
      </div>
      <div className="saved-movies__saved-devider"></div>
    </section>
  )
}

export default SavedMovies;