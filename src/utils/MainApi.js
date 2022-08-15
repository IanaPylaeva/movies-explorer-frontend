import { mainApiUrl } from './constants';

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  /* Ответ от сервера всегда проверяется на корректность */
  _handleResponse = (res) => 
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис

  registerUser({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
    .then(this._handleResponse);
  };

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(this._handleResponse);
  };

  getToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(this._handleResponse);
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
    })
    .then(this._handleResponse);
  };

  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
    .then(this._handleResponse);
  };

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
    })
    .then(this._handleResponse);
  };

  addMovies(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
      body: JSON.stringify(data),
    })
    .then(this._handleResponse);
  };

  deleteMovies(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
    })
    .then(this._handleResponse);
  };

  updateToken() {
    this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }
};

const mainApi = new MainApi({
  url: mainApiUrl || 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default mainApi;