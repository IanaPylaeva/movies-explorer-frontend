import React from "react";
import './AboutMe.css';
import Title from "../Title/Title";
import photo from "../../images/vitaliy-photo.jpg";
import arrow from "../../images/strelka-open.svg";

function AboutMe() {
  return (
    <section className="about-me">
      <Title title="Студент" />
      <div className="about-me__info">
        <div className="about-me__container">
          <div className="about-me__text-container">
            <h2 className="about-me__title">Виталий</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about-me__list-links">
              <li className="about-me__link-item"><a className="about-me__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
              <li className="about-me__link-item"><a className="about-me__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
            </ul>          
          </div>
          <img className="about-me__photo" src={photo} alt="Фотография Виталия"></img>
        </div>
        <div className="about-me__portfolio-container">
          <p className="about-me__portfolio-title">Портфолио</p>
          <ul className="about-me__portfolio-list">
            <li className="about-me__portfolio-list-item">
              <p className="about-me__portfolio">Статичный сайт</p>
              <a href="https://#" target="_blank" rel="noreferrer" class="about-me__portfolio-arrow"><img src={arrow} alt="стрелка-ссылка" /></a>
            </li>
            <li className="about-me__portfolio-list-item">
              <p className="about-me__portfolio">Адаптивный сайт</p>
              <a href="https://#" target="_blank" rel="noreferrer" class="about-me__portfolio-arrow"><img src={arrow} alt="стрелка-ссылка" /></a>
            </li>
            <li className="about-me__portfolio-list-item">
              <p className="about-me__portfolio">Одностраничное приложение</p>
              <a href="https://#" target="_blank" rel="noreferrer" class="about-me__portfolio-arrow"><img src={arrow} alt="стрелка-ссылка" /></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;