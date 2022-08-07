import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import Welcome from "../Welcome/Welcome";

function Login(props) {
  function handleSubmit(evt) {
    evt.preventDefault();// Запрещаем браузеру переходить по адресу формы - не перезагружается
  }

  return (
    <section className="auth">
      <Welcome title="Рады видеть" active={props.active} />
      <form className="auth__form auth__form_type_login" onSubmit={handleSubmit} name="auth-form">
        <div className="auth__inputs">
          <div className="auth__input-container">          
            <p className="auth__text">E-mail</p>
            <input className="auth__input" value="pochta@yandex.ru" placeholder="E-mail" type="email" name="email" minLength="1" maxLength="50"  required />            
            <span className="auth__input-error"></span>
          </div>
          <div className="auth__input-container">          
            <p className="auth__text">Пароль</p>
            <input className="auth__input" value="" placeholder="" type="password" name="password" minLength="1" maxLength="50" required />
            <span className="auth__input-error"></span>
          </div>
        </div>
      </form>
      <button className="auth__button" type="submit">Войти</button>
      <div className="auth__reg-container">
        <p className="auth__reg-question">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="auth__reg-link">Регистрация</Link>
      </div>
    </section>
  )
}

export default Login;