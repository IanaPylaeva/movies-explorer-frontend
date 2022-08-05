import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <p className="portfolio__text">Статичный сайт</p>
          <a href="https://#" target="_blank" rel="noreferrer" className="portfolio__arrow">&uarr;</a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a href="https://#" target="_blank" rel="noreferrer" className="portfolio__arrow">&uarr;</a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a href="https://#" target="_blank" rel="noreferrer" className="portfolio__arrow">&uarr;</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;