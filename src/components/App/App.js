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
      <Header loggedIn={true} />
      <Routes>
        <Route exact path="/" element={ <Main /> }></Route>
        <Route exact path="/movies" element={ <Movies /> }></Route>
        <Route exact path="/saved-movies" element={ <SavedMovies /> }></Route>
        <Route exact path="/profile" element={ <Profile /> }></Route>
      </Routes>
      <Footer />
      <Routes>
        <Route path="/signin" element={ <Login /> }></Route>
        <Route path="/signup" element={ <Register /> }></Route>
        <Route path="*" element={ <PageNotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
