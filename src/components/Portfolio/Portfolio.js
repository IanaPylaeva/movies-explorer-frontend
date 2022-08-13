import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">          
          <a href="https://ianapylaeva.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link">Статичный сайт</a>
          <a href="https://ianapylaeva.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link"><p className="portfolio__arrow">&uarr;</p></a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://ianapylaeva.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link">Адаптивный сайт</a>
          <a href="https://ianapylaeva.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link"><p className="portfolio__arrow">&uarr;</p></a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://domain.ianapylaeva.nomoredomains.xyz" target="_blank" rel="noreferrer" className="portfolio__link">Одностраничное приложение</a>
          <a href="https://ianapylaeva.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link"><p className="portfolio__arrow">&uarr;</p></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;