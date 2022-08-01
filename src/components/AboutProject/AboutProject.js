import React from "react";
import './AboutProject.css';
import Title from "../Title/Title";

function AboutProject() {
  return (
    <div className="about-project">
      <Title title="О проекте" />
      <div className="about-project__container">
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
          <div className="about-project__container-back-end">
            <p className="about-project__week-back-end">1 неделя</p>
            <p className="about-project__architecture-back-end">Back-end</p>
          </div>
          <div className="about-project__container-front-end">
            <p className="about-project__week-front-end">4 недели</p>
            <p className="about-project__architecture-front-end">Front-end</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject;