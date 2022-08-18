import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import Welcome from "../Welcome/Welcome";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function Profile({ onSignOut, openPopup }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [lastName, setLastName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [lastEmail, setLastEmail] = React.useState(currentUser.email);
  const [isVisibleButton, setVisibleButton] = React.useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();// Запрещаем браузеру переходить по адресу формы - не перезагружается

    mainApi.updateUserInfo({ name, email })
      .then(() => {
        setVisibleButton(false);
        setLastName(name);
        setLastEmail(email);
        openPopup('Данные успешно изменены!');
      })
      .catch((err) => {
        openPopup(`Что-то пошло не так! ${err}`);
      });
  };

  function handleNameChange(evt) {
    const value = evt.target.value;
    setName(value);

    if (value !== lastName) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  }

  function handleEmailChange(evt) {
    const value = evt.target.value;
    setEmail(value);

    if (value !== lastEmail) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit} name="profile-form">        
        <Welcome title="Привет, " name={name}/>
        <div className="profile__inputs">
          <div className="profile__input-container">          
            <p className="profile__text">Имя</p>
            <input className="profile__input" value={name} placeholder="" type="text" name="name" minLength="1" maxLength="50" onChange={handleNameChange} required />
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__input-container">          
            <p className="profile__text">E-mail</p>
            <input className="profile__input" value={email} placeholder="" type="email" name="email" minLength="1" maxLength="50" onChange={handleEmailChange} required />
            <span className="profile__input-error"></span>
          </div>
        </div>
        <button className={`profile__button-edit ${!isVisibleButton ? 'profile__button-edit_inactive' : ''}`}
        type="submit" disabled={!isVisibleButton}>Редактировать</button>
        <Link to="/" className="profile__button-sign-out" type="button" onClick={onSignOut}>Выйти из аккаунта</Link>
      </form>
    </section>
  )
}

export default Profile;