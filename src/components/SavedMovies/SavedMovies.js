import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import image1 from '../../images/movies-cards/movie-card-1.jpg';
import image2 from '../../images/movies-cards/movie-card-2.jpg';
import image3 from '../../images/movies-cards/movie-card-3.jpg';

function SavedMovies() {
  return (
    <section className="movies-card-list">
      <SearchForm />
      <div className="movies-card-list__container">
        <MoviesCard isSaved={false} image={image1} />
        <MoviesCard isSaved={false} image={image2} />
        <MoviesCard isSaved={true} image={image3} />
      </div>
      <div className="movies-card-list__container-more">
        <button className="movies-card-list__button-more" type="button">Ещё</button>
      </div>
      <div className="saved-movies__saved-devider"></div>
    </section>
  )
}

export default SavedMovies;