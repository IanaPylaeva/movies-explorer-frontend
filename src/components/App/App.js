import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        <Route exact path="*">
          <PageNotFound />
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
