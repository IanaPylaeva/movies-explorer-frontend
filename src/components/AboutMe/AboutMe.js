import React from "react";
import './AboutMe.css';
import Title from "../Title/Title";
import photo from "../../images/vitaliy-photo.jpg";
import { profession, firstName, aboutMe, biography, facebookLink, githubLink } from '../../utils/constants';

function AboutMe() {
  return (
    <section className="about-me">
      <Title title={profession} />
      <div className="about-me__info">
        <div className="about-me__text-container">
          <h2 className="about-me__title">{firstName}</h2>
          <p className="about-me__subtitle">{aboutMe}</p>
          <p className="about-me__text">{biography}</p>
          <ul className="about-me__list-links">
            <li className="about-me__link-item"><a className="about-me__link" href={facebookLink} target="_blank" rel="noreferrer">Facebook</a></li>
            <li className="about-me__link-item"><a className="about-me__link" href={githubLink} target="_blank" rel="noreferrer">Github</a></li>
          </ul>          
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография Виталия"></img>
      </div>
    </section>
  )
}

export default AboutMe;