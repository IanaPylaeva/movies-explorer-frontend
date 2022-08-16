import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import Welcome from "../Welcome/Welcome";
import { validationEmailErrorMessage } from "../../utils/constants";
import isEmail from 'validator/es/lib/isEmail';

function Login({ onLogin }) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'email') {
      if(!isEmail(value)) {
        target.setCustomValidity(validationEmailErrorMessage);
      } else {
        target.setCustomValidity('');
      }
    }
    
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };
  
  function handleSubmit(evt) {
    evt.preventDefault();// Запрещаем браузеру переходить по адресу формы - не перезагружается
    onLogin(values);
  }

  return (
    <section className="auth">
      <Welcome title="Рады видеть!" />
      <form className="auth__form auth__form_type_login" onSubmit={handleSubmit} name="auth-form">
        <div className="auth__inputs">
          <div className="auth__input-container">          
            <p className="auth__text">E-mail</p>
            <input
              className={`auth__input ${errors.email ? 'auth__auth__input_error-red' : ''}`}
              value={values.email || ''}
              placeholder="Введите e-mail"
              type="email"
              name="email"
              minLength="1"
              maxLength="50"
              onChange={handleChange}
              required />            
            <span className={`auth__input-error ${errors.email ? 'auth__input-error_active' : ''}`}>{errors.email}</span>
          </div>
          <div className="auth__input-container">          
            <p className="auth__text">Пароль</p>
            <input
              className={`auth__input ${errors.password ? 'auth__auth__input_error-red' : ''}`}
              value={values.password || ''}
              placeholder="Введите пароль"
              type="password"
              name="password"
              minLength="1"
              maxLength="50"
              onChange={handleChange}
              required />
            <span className={`auth__input-error ${errors.password ? 'auth__input-error_active' : ''}`}>{errors.password}</span>
          </div>
        </div>      
        <button
          className={`auth__button ${isValid ? "" : 'auth__button_disabled'}`}
          type="submit"
          disabled={!isValid ? true : ''}
          >Войти</button>
        <div className="auth__reg-container">
          <p className="auth__reg-question">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth__reg-link">Регистрация</Link>
        </div>
      </form>
    </section>
  )
}

export default Login;