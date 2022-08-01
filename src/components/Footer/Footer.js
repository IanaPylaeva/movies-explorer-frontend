import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <div className="footer__date">&copy; 2022</div>
        <ul className="footer__list-links">
          <li className="footer__link">Яндекс.Практикум</li>
          <li className="footer__link">Github</li>
          <li className="footer__link">Facebook</li>
        </ul>
      </div>
    </footer> 
  )
}

export default Footer;