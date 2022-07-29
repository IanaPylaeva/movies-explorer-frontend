import React from "react";
import './Promo.css';

function Promo() {
  return (
    <div className="promo">
      <h2 className="promo__title">Учебный проект студента факультета Веб-разработки.</h2>
      <ul className="promo__list">
        <li className="promo__list-item">
          <a href="#about-project" className="promo__link">О проекте</a>
        </li>
        <li className="promo__list-item">
          <a href="#techs" className="promo__link">Технологии</a>
        </li>
        <li className="promo__list-item">
          <a href="#about-me" className="promo__link">Студент</a>
        </li>
      </ul>
    </div>
  )
}

export default Promo;