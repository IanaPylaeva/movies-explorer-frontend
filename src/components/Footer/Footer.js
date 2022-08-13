import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <div className="footer__date">&copy; 2022</div>
        <ul className="footer__list-links">
          <li className="footer__link"><a className="footer__link-name" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" >Яндекс.Практикум</a></li>
          <li className="footer__link"><a className="footer__link-name" href="https://github.com/" target="_blank" rel="noreferrer" >Github</a></li>
          <li className="footer__link"><a className="footer__link-name" href="https://www.facebook.com/" target="_blank" rel="noreferrer" >Facebook</a></li>
        </ul>
      </div>
    </footer> 
  )
}

export default Footer;