import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

import image1 from '../../images/movies-cards/movie-card-1.jpg';
import image2 from '../../images/movies-cards/movie-card-2.jpg';
import image3 from '../../images/movies-cards/movie-card-3.jpg';
import image4 from '../../images/movies-cards/movie-card-4.jpg';
import image5 from '../../images/movies-cards/movie-card-5.jpg';
import image6 from '../../images/movies-cards/movie-card-6.jpg';
import image7 from '../../images/movies-cards/movie-card-7.jpg';
import image8 from '../../images/movies-cards/movie-card-8.jpg';
import image9 from '../../images/movies-cards/movie-card-9.jpg';
import image10 from '../../images/movies-cards/movie-card-10.jpg';
import image11 from '../../images/movies-cards/movie-card-11.jpg';
import image12 from '../../images/movies-cards/movie-card-12.jpg';

const cards = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

function MoviesCardList(props) {
  return(
    <section className="movies-card-list">
      <div className="movies-card-list__container">
      {cards.map((card) => {
        return (
        <MoviesCard
          key={card._id}
          card={card}
          onCardClick={props.onCardClick}
          title="33 слова о дизайне"
          time="1ч 47м"
        />
        )})
      }
      </div>
      <div className="movies-card-list__container-more movies-card-list__container-more_active">
        <button className="movies-card-list__button-more" type="button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;