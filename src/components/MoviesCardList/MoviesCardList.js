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

function MoviesCardList() {
  return(
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard isSaved={false} image={image1} />
        <MoviesCard isSaved={false} image={image2} />
        <MoviesCard isSaved={true} image={image3} />
        <MoviesCard isSaved={false} image={image4} />
        <MoviesCard isSaved={true} image={image5} />
        <MoviesCard isSaved={false} image={image6} />
        <MoviesCard isSaved={false} image={image7} />
        <MoviesCard isSaved={false} image={image8} />
        <MoviesCard isSaved={false} image={image9} />
        <MoviesCard isSaved={true} image={image10} />
        <MoviesCard isSaved={false} image={image11} />
        <MoviesCard isSaved={false} image={image12} />
      </div>
      <div className="movies-card-list__container-more movies-card-list__container-more_active">
        <button className="movies-card-list__button-more" type="button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;