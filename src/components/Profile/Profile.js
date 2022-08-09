import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import Welcome from "../Welcome/Welcome";

function Profile() {
  
  function handleSubmit(evt) {
    evt.preventDefault();// Запрещаем браузеру переходить по адресу формы - не перезагружается
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit} name="profile-form">        
      <Welcome title="Привет, Виталий!" />
        <div className="profile__inputs">
          <div className="profile__input-container">          
            <p className="profile__text">Имя</p>
            <input className="profile__input" value="Виталий" placeholder="Имя" type="text" name="name" minLength="1" maxLength="50" required />
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__input-container">          
            <p className="profile__text">E-mail</p>
            <input className="profile__input" value="pochta@yandex.ru" placeholder="E-mail" type="email" name="email" minLength="1" maxLength="50"  required />
            <span className="profile__input-error"></span>
          </div>
        </div>
      </form>
      <Link to="/profile" className="profile__button-edit" type="submit">Редактировать</Link>
      <Link to="/" className="profile__button-sign-out" type="button">Выйти из аккаунта</Link>
    </section>
  )
}

export default Profile;