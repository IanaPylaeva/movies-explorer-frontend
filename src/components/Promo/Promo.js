import React from "react";
import './Promo.css';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

function Promo() {
  return (
    <div className="promo">
      <h2 className="promo__title">Учебный проект студента факультета Веб-разработки.</h2>
      <ul className="promo__list">
        <li className="promo__list-item">
          <ScrollLink to="about-project" className="promo__link">О проекте</ScrollLink>
        </li>
        <li className="promo__list-item">
          <ScrollLink to="techs" className="promo__link">Технологии</ScrollLink>
        </li>
        <li className="promo__list-item">
          <ScrollLink to="about-me" className="promo__link">Студент</ScrollLink>
        </li>
      </ul>
    </div>
  )
}

export default Promo;