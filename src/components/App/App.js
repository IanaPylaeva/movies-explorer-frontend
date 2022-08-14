import React, { useEffect } from "react";
import './App.css';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { severError, registerUserSuccessful, registerUserError, authError } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from "../Preloader/Preloader";
import MainApi from '../../utils/MainApi';
import Token from '../../utils/token';
import Popup from "../Popup/Popup";

function App() {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [popupTitle, setPopupTitle] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    MainApi.getUserData()
    .then((data) => {
      setCurrentUser(data);
      setLoggedIn(true);
    })
    .catch((err) => {
      console.log(severError);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function onRegister(data) {
    MainApi.register(data)
    .then((res) => {
      if (res._id) {
        setPopupTitle(registerUserSuccessful);
        setIsOpenPopup(true);
        onLogin(data);
      }
    })
    .catch((err) => {
      setPopupTitle(registerUserError);
      setIsOpenPopup(true);
    });
  }

  function onLogin(data) {
    MainApi.authorize(data)
    .then(({ token }) => {
      if (token) {
        Token.saveToken(token);
        MainApi.updateToken();
        setLoggedIn(true);
        getUserData();
        navigate('/movies');
      }
    })
    .catch((err) => {
      setPopupTitle(authError);
      setIsOpenPopup(true);
    });
  }

  function openPopup(textError) {
    setPopupTitle(textError);
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
    setPopupTitle('');
  }

  useEffect(() => {
    if (setIsOpenPopup) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closePopup();
        }
      }

      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isOpenPopup]);

  function onSignOut() {
    Token.removeToken();
    setLoggedIn(false);
    localStorage.removeItem('films');
    localStorage.removeItem('filmsTumbler');
    localStorage.removeItem('filmsInputSearch');
    localStorage.removeItem('savedFilms');
    localStorage.removeItem('savedFilmsTumbler');
    localStorage.removeItem('savedFilmsInputSearch');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? <Header loggedIn={loggedIn} isLoading={isLoading} /> : ''}
        
        <Routes>
          <Route exact path="/" element={ <Main /> }></Route>

          <Route exact path="/movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}         
              component={Movies}
              isLoading={isLoading}
              openPopup={openPopup}
            ></ProtectedRoute>
          }></Route>
          
          <Route exact path="/saved-movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
              isLoading={isLoading}
              openPopup={openPopup}
            ></ProtectedRoute>
          }></Route>

          <Route exact path="/profile" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              isLoading={isLoading}
              onSignOut={onSignOut}
              openPopup={openPopup}
            ></ProtectedRoute>
          }></Route>
          
          <Route path="/signin" element={
            () => 
              isLoading ? <Preloader /> : !loggedIn ? <Login onLogin={onLogin} /> : <Navigate to="/movies" />
            }
          />

          <Route path="/signup" element={
            () => 
              isLoading ? <Preloader /> : !loggedIn ? <Register onRegister={onRegister} /> : <Navigate to="/movies" />
            }
          />

          <Route path="*" element={ <PageNotFound /> } />
        </Routes>

        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer /> : ''}

        <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;