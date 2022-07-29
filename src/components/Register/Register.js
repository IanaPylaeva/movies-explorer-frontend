import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  function handleSubmit(evt) {
    evt.preventDefault();// Запрещаем браузеру переходить по адресу формы - не перезагружается
  }

  return (
    <section className="auth">
      <div className="auth__container">
        <img src={logo} alt="логотип" className="logo" />
        <h2 className="auth__title">Добро пожаловать!</h2>
      </div>
      <form className="auth__form" onSubmit={handleSubmit} name="auth-form">
        <div className="auth__inputs">
          <div className="auth__input-container">          
            <p className="auth__text">Имя</p>
            <input className="auth__input" value="Виталий" placeholder="Виталий" type="text" name="name" minLength="1" maxLength="50"  required />            
          </div>
          <div className="auth__input-container">          
            <p className="auth__text">E-mail</p>
            <input className="auth__input" value="pochta@yandex.ru" placeholder="E-mail" type="email" name="email" minLength="1" maxLength="50"  required />            
          </div>
          <div className="auth__input-container">          
            <p className="auth__text">Пароль</p>
            <input className="auth__input" value="" placeholder="" type="password" name="password" minLength="1" maxLength="50" required />
            <span className="auth__input-error"></span>
          </div>
        </div>
      </form>
      <button className="auth__button" type="submit">Зарегистрироваться</button>
      <div className="auth__reg-container">
        <div className="auth__reg-question">Уже зарегистрированы?</div>
        <Link to="/signin" className="auth__reg-link">Войти</Link>
      </div>
    </section>
  )
}

export default Register;