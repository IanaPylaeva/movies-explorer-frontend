import React from "react";
import './Footer.css';
import { facebookLink, githubLink } from '../../utils/constants';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <div className="footer__date">&copy; 2022</div>
        <ul className="footer__list-links">
          <li className="footer__link"><a className="footer__link-name" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" >Яндекс.Практикум</a></li>
          <li className="footer__link"><a className="footer__link-name" href={githubLink} target="_blank" rel="noreferrer" >Github</a></li>
          <li className="footer__link"><a className="footer__link-name" href={facebookLink} target="_blank" rel="noreferrer" >Facebook</a></li>
        </ul>
      </div>
    </footer> 
  )
}

export default Footer;