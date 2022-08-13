import { mainApiUrl, moviesApiUrl } from './constants';

/* Ответ от сервера всегда проверяется на корректность */
const handleResponse = (res) => 
res.ok ? res.json() : Promise.reject(`ошибка: ${res.status}`); // если ошибка, отклоняем промис

export const register = (name, email, password) => {
  return fetch(`${mainApiUrl}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
  .then(handleResponse);
};

export const authorize = (email, password) => {
  return fetch(`${mainApiUrl}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(handleResponse);
};

export const getUserData = () => {
  return fetch(`${mainApiUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
  .then(handleResponse);
};

export const updateUser = (data) => {
  return fetch(`${mainApiUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  })
  .then(handleResponse);
};

export const getMoviesCards = () => {
  return fetch(`${mainApiUrl}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
  .then(handleResponse);
};

export const createMovie = (data) => {
  return fetch(`${mainApiUrl}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `${moviesApiUrl}${data.image.url}`,
      trailer: data.trailerLink,
      nameRu: data.nameRu,
      nameEn: data.nameEn,
      thumbnail: `${moviesApiUrl}${data.image.formats.url}`,
      movieId: data.id,
    }),
  })
  .then(handleResponse);
};

export const removeMovies = (id) => {
  return fetch(`${mainApiUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
  .then(handleResponse);
};