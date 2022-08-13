import React, { useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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

function App() {
  const [ moviesCards, setMoviesCards ] = React.useState([]);
  const [ savedMovies, setSavedMovies ] = React.useState([]);
  const [ isCardsLoading, setIsCardsLoading ] = React.useState(false);
  const [ errorMessageMovies, setErrorMessageMovies ] = React.useState(null);
  const [ errorMessageSavedMovies, setErrorMessageSavedMovies ] = React.useState(null);
  const [ authErrorMessage, setAuthErrorMessage ] = React.useState(null);
  const [ updateMessage, setUpdateMessage ] = React.useState(null);
  const [ updateErrorMessage, setUpdateErrorMessage ] = React.useState(null);
  const [ isDisableForm, setIsDisableForm ] = React.useState(false);

  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);

  /* Получение карточек */
  useEffect(() => {
    if (isLoggedIn) {
      setIsCardsLoading(true);
      MainApi
        .getMoviesCards()
        .then((movies) => {
          localStorage.setItem('lastSearchMovies', JSON.stringify(movies));
        })
        .catch((err) => {
          setErrorMessageMovies(serverError)
          console.log(error);
        })
        .finally(() => {
          setIsCardsLoading(false);
        });
    }
   }, [isLoggedIn]);




  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={[ <Header loggedIn={false} />, <Main />, <Footer /> ]}></Route>
        <Route exact path="/movies" element={[ <Header loggedIn={true} />, <Movies />, <Footer /> ]}></Route>
        <Route exact path="/saved-movies" element={[ <Header loggedIn={true} />, <SavedMovies />, <Footer /> ]}></Route>
        <Route exact path="/profile" element={[ <Header loggedIn={true} />, <Profile /> ]}></Route>
        <Route path="/signin" element={ <Login /> }></Route>
        <Route path="/signup" element={ <Register /> }></Route>
        <Route path="*" element={ <PageNotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
