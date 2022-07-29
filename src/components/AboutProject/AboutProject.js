import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <div className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__text-container">
          <div className="about-project__text-item">
            <h2 className="about-project__text-title">Дипломный проект включал 5 этапов</h2>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__text-item">
            <h2 className="about-project__text-title">На выполнение диплома ушло 5 недель</h2>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__weeks-contaner">
          <div className="about-project__architecture-container">
            <p className="about-project__week">1 неделя</p>
            <p className="about-project__architecture">Back-end</p>
          </div>
          <div className="about-project__architecture-container">
            <p className="about-project__week">4 недели</p>
            <p className="about-project__architecture">Front-end</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject;